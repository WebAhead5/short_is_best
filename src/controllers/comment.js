const { addNewComment } = require('../models/comments/Comments.model');

// This function handles the POST /addNewComment route
// checks if the content and user are exisits if not send back 
// a proper error message
// Then add the new comment to our database using the v addNewComment method
// make sure to handle any error that might occured
exports.addComment = async (req, res, err) => {
  var content = req.body.content;
  var postId  = req.body.postid; 

  if (content.length == 0 || postId.length == 0) {
    res.render('home');
    return;
  }

  //TODO: make some checks in the content....
  // Store comment in DB.
  try {
    await addNewComment(postId, content);
    res.redirect('/');
  } catch (e) {
    res.render('home', { error: e.message });
  }
};