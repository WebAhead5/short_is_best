const { getallposts,deletePost,addNewPost } = require('../models/posts/Post.model');

var posts = []; 

// This function handles the POST /newPost route
// checks if the content and user are exisits if not send back 
// a proper error message
// Then add the new post to our database using the v addNewPost method
// make sure to handle any error that might occured
exports.addPost = async (req, res, err) => {
 
  var content = req.body.content;
  if (content.length == 0) {
    res.render('home');
    return;
  }

  //TODO: make some checks in the content....

  // Store post in DB.
  try {
    await addNewPost(content,0,"22-01-2020",1);
    res.redirect('/getPosts');
  } catch (e) {
    res.render('home', { error: e.message });
  }
};
  // This function handles the DELETE /removePost route
// checks if the id exisits if not send back 
// a proper error message
// Then remove post from our database using the v deletePost method
// make sure to handle any error that might occured
exports.removePost =  async (req, res, err) => {
    var postId = req.body.postId;

    if (postId.length == 0) {
      res.render('home');
      return;
    }
  
    //TODO: make some checks in the content....
  
    // Remove post from DB.
    try {
      await deletePost(postId, content);
      res.redirect('/');
    } catch (e) {
      res.render('home', { error: e.message });
    }
    
  };


// This function handles the Post /addLike route
// checks if the posti d exisits if not send back 
// a proper error message
// Then add like to the post from our database using the v addLikeToPost method
// make sure to handle any error that might occured
exports.addLike =  async (req, res, err) => {
  var postId = req.body.postId;

  if (postId.length == 0) {
    res.render('home');
    return;
  }

  //TODO: make some checks in the content....

  // Remove post from DB.
  try {
    await addLikeToPost(postId);
    res.redirect('/');
  } catch (e) {
    res.render('home', { error: e.message });
  }
  
};

// This function handles the Get /getPosts route
// and if error
// a proper error message
// make sure to handle any error that might occured
exports.getPosts =  async (req, res, err) => {
  try {
    posts = await getallposts();
    var result = posts.map(function(elment) {
      var object = Object.assign({}, elment);
      object.handle = '@jokerjames';
      object.img = 'https://semantic-ui.com/images/avatar2/large/matthew.png';
      return object;
    })
    res.render('home', { signedIn: true, tweet: result });
  } catch (e) {
    res.render('home', { error: e.message });
  }
};
