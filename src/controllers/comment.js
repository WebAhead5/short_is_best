// This function handles the POST /addNewComment route
// checks if the content and user are exisits if not send back 
// a proper error message
// Then add the new comment to our database using the v addNewComment method
// make sure to handle any error that might occured
exports.addNewComment =  (req, res, err) => {
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

// This function handles the DELETE /removeComment route
// checks if the comment id exisits if not send back 
// a proper error message
// Then remove the comment to from database using the v removeComment method
// make sure to handle any error that might occured
exports.removeComment =  (req, res, err) => {
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