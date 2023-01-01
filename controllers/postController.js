const Post = require('./../model/postModel');

//  CONTROLLERS

//  FETCH POSTS
exports.getPost = async (req, res) => {
  try {
    const post = await Post.find().sort({ date: -1 });

    res.status(200).json({
      status: 'Success',
      length: post.length,
      result: {
        post,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'Failure',
      result: error,
    });
  }
};

//  CREATE POSTS
exports.createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);

    res.status(200).json({
      status: 'Success',
      result: {
        post,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'Failure',
      result: error,
    });
  }
};
