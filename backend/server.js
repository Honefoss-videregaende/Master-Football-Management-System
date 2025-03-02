const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const protectedRoutes = require('./routes/protectedRoutes');
const errorHandler = require('./middlewares/errorHandler');
const logger = require('./middlewares/logger');
const rateLimiter = require('./middlewares/rateLimiter');

const app = express();

// Apply rate limiting middleware globally
app.use(rateLimiter);

// Middleware to log incoming requests
app.use(logger);

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
    console.log(`Server is running on port ${PORT}`);
});