const express = require('express');

const postController = require('./../controllers/postController');

//  ROUTES
const postRouter = express.Router();

postRouter
  .route('/')
  .get(postController.getPost)
  .post(postController.createPost);

module.exports = postRouter;
