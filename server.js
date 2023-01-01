const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');

//  DATABASE CONNECTION USING MONGOOSE ODM AND MONGODB ATLAS
const DB = process.env.NODE_DATABASE.replace(
  '<PASSWORD>',
  process.env.NODE_DATABASE_PASSWORD
);

//  RETURNS THE PROMISE
mongoose.connect(DB).then(() => console.log(`Connection Successful...`));

const PORT = process.env.NODE_PORT || 5000;

//  SERVER IS RUNNING
app.listen(PORT, () => {
  console.log(`Server is running on the server ${PORT}...`);
});
