const mongoose = require('mongoose');

//  SCHEMA
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A post must have a title'],
    unique: true,
  },
  content: {
    type: String,
    required: [true, 'A post must have a content'],
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//  MODEL
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
