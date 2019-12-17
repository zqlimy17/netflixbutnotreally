// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();

// Environment Variables
const PORT = process.env.PORT;

// Global Configuration
const db = mongoose.connection;

// Mongoose Deprecation Warnings
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// Middleware
app.use(express.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
  })
);

// Environment Variables
const mongoURI =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/comparison-movie-db';

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true }, () =>
  console.log('MongoDB connection established:', mongoURI)
);

// Connection Error/Success
db.on('error', err => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', mongoURI));
db.on('disconnected', () => console.log('mongo disconnected'));

// Controllers
const usersControllers = require('./controllers/users');
app.use('/users', usersControllers);

// changes by VJ - 10 dec 2019
// use the controllers in server.js -

const moviesController = require('./controllers/movies');
app.use('/movies', moviesController);

//use body parser in server.js
app.use(express.urlencoded({ extended: false }));

const sessionsControllers = require('./controllers/sessions');
app.use('/sessions', sessionsControllers);

// Routes
app.get('/*', (req, res) => {
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log('Watching Movies on Port', PORT);
});
