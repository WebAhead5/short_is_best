const express = require('express');
const router = express.Router();
const { validateNewUser, loginLogger } = require('../middlewares');
const { findByUsername, addNewUser } = require('../models/users/User.model');

const home = require('./home');
const auth = require('./auth');
const error = require('./error');
const post = require('./post');
const comment = require('./comment');


// add home route
router.get('/', home.get);
router.get('/login', auth.loginPage);
router.get('/register', auth.registerPage);
router.post('/authenticate', auth.authenticate);
router.post('/addUser', auth.addUser);
router.get('/logout', auth.logout);
router.post('/newPost', post.addPost);
router.delete('/removePost', post.removePost);
router.post('/newComment', comment.addComment);
router.post('/newLike', post.addLike);
router.get('/getPosts',post.getPosts);
router.use(error.client);
router.use(error.server);

module.exports = router;