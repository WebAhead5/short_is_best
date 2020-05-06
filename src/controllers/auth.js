const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
// use these functions to manipulate our database
const { findByUsername, addNewUser } = require('../models/users/User.model');

exports.loginPage = (req, res) => {
    res.render('login', { activePage: { login: false } });
};
exports.registerPage = (req, res) => {
    res.render('register', { activePage: { register: false }, error: '' });
};

// This function handles the POST /addUser route
// checks if the password and confirmPassword are equal if not send back 
// a proper error message
// hash the password, then add the new user to our database using the v addNewUser method
// make sure to handle any error that might occured
exports.addUser = (req, res, err) => {
    var email = req.body.email;
    var password = req.body.password;
    var name = req.body.name;
    var admin = req.body.admin;
    var confirmPassword = req.body.confirmPassword;
    if (email.length == 0 || password.length == 0 || confirmPassword.length == 0) {
        res.render('register', { error: 'one of the fields is empty' });
        return;
    }
    if (password !== confirmPassword) {
        //return new Error('Passwords not match');
        res.render('register', { error: 'Passwords not match' });
        return;
    }
    bcrypt.hash(password, saltRounds, async function(err, hash) {
        if (err) {
            res.render('register', { error: 'error in hashing' });
            return;
        }
        // Store hash in your password DB.
        try {
            await addNewUser(email, hash, name, admin);
            res.redirect('/');
        } catch (e) {
            res.render('register', { error: e.message });
        }
    });

};

// this function handles the POST /authenticate route
// it finds the user in our database by his username that he inputed
// then compares the password that he inputed with the one in the db
// using bcrypt and then redirects back to the home page 
// make sure to look at home.hbs file to be able to modify the home page when user is logged in
// also handle all possible errors that might occured by sending a message back to the cleint
exports.authenticate = async(req, res) => {
    var username = req.body.username;
    var password = req.body.password;
    try {
        var user = await findByUsername(username);
        bcrypt.compare(password, user.password, function(err, result) {
            if (err) {
                res.render('login', { error: err.message });
            }
            if (result == true) {
                jwt.sign(user.username, process.env.JWT_SECRET, function(err, token) {
                    if (err) {
                        res.render('login', { error: err.message });
                    }
                    console.log(token)
                    res.cookie('access_token', token);
                    res.redirect('/');
                });

            } else {
                res.render('login', { error: "username or password not corect" });
            }
        });
    } catch (e) {
        console.log(e.message);
        res.render('login', { error: e.message });
    }
};


exports.logout = (req, res) => {
    res.clearCookie('access_token');
    res.redirect('/');
}