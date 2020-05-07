const jwt = require('jsonwebtoken');

exports.get = (req, res) => {
    if (!res.locals.user) {
        res.render('home', { activePage: { home: true }, signedIn: false});
    } else {
        res.redirect('/getPosts');
    }

};