
// This function handles the POST /addNewLike route
// checks if the post and user are exisits if not send back 
// a proper error message
// Then add the new like to our database using the v addNewLike method
// make sure to handle any error that might occured
exports.addNewLike =  (req, res, err) => {
    var username = req.body.username;
    var password = req.body.password;
    var confirmPassword = req.body.confirmPassword;
    if(username.length == 0 || password.length == 0 || confirmPassword.length ==0){
      res.render('register', { error: 'one of the fields is empty'});
      return;
    }
    if(password !== confirmPassword){
      //return new Error('Passwords not match');
      res.render('register', { error: 'Passwords not match'});
      return;
    }
    bcrypt.hash(password, saltRounds, async function(err, hash) {
      if(err){
        res.render('register', { error: 'error in hashing'});
        return;
      }
      // Store hash in your password DB.
      try{
        await addNewUser(username,hash);
        res.redirect('/');
      }catch(e){
        res.render('register',{error: e.message});
      }
    });
    
  };