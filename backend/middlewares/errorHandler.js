/**
 * Error Handler Middleware
 * Catches errors and sends appropriate responses to the client.
 */
const errorHandler = (err, req, res, next) => {
    // Log the error message for debugging purposes
    console.error(err.message);
    // Send a generic error response to the client
    res.status(500).json({ error: 'Something went wrong. Please try again later.' });
};

module.exports = errorHandler;