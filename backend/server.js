require('dotenv').config(); // Load environment variables from .env file
require('express-async-errors'); // Handle async errors

const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const protectedRoutes = require('./routes/protectedRoutes');
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

// Use the protected routes with the '/protected' prefix
app.use('/protected', protectedRoutes);

// Placeholder for defining other routes (if any)
// Example: app.use('/users', userRoutes);

// Use the error handler middleware
app.use(errorHandler);

// Set the port for the server to listen on (from environment variables or default to 3000)
const PORT = process.env.PORT || 3000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});