const express = require('express');
const path = require('path');
const volleyball = require('volleyball');
const app = express();

// logging middleware
app.use(volleyball);

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// // static middleware
// app.use(express.static(path.join(__dirname, '../public')));

// //send index.html for any requests that don't match one of our routes
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Access-Control-Allow-Headers'
  );
  next();
});

app.use('/api', require('./api'));

// error handling middleware
app.use((err, req, res, next) => {
  if (process.env.NODE_ENV !== 'test') console.error(err.stack);
  res
    .status(err.status || 500)
    .send(err.message || 'Internal server error - sorry dawg!');
});

//listen at a port on the localhost (process.env.PORT for Heroku)
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Commence pup grooming at port ${port}: Welcome, dawg!`);
});

module.exports = app;
