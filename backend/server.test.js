require('dotenv').config(); // Load environment variables from .env file
require('express-async-errors'); // Handle async errors

const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes'); // Ensure this line is included
const errorHandler = require('./middlewares/errorHandler');
const logger = require('./middlewares/logger');
const requestLogger = require('./middlewares/requestLogger');
const rateLimiter = require('./middlewares/rateLimiter');

const app = express();

// Apply rate limiting middleware globally
app.use(rateLimiter);

// Middleware to log incoming requests using morgan
app.use(requestLogger);

// Middleware to parse JSON bodies in incoming requests
app.use(bodyParser.json());

// Route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Master Football Management System API');
});

// Use the authentication routes with the '/auth' prefix
app.use('/auth', authRoutes);

// Use the user routes with the '/user' prefix
app.use('/user', userRoutes); // Ensure this line is included

// Use the error handler middleware
app.use(errorHandler);

module.exports = app;