// This function handles the POST /addNewPost route
// checks if the content and user are exisits if not send back 
// a proper error message
// Then add the new post to our database using the v addNewPost method
// make sure to handle any error that might occured
exports.addNewPost =  (req, res, err) => {
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

  // This function handles the DELETE /removePost route
// checks if the id exisits if not send back 
// a proper error message
// Then remove post from our database using the v removePost method
// make sure to handle any error that might occured
exports.removePost =  (req, res, err) => {
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