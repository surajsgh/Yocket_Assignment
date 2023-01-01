const express = require('express');
const morgan = require('morgan');

const postRouter = require('./routes/postRouter');

const app = express();

//  MIDDLEWARE
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

//  CUSTOM MIDDLEWARE
app.use((req, res, next) => {
  console.log('Logging...');
  next();
});

//  ROUTES
app.use('/api/v1/post', postRouter);

module.exports = app;
