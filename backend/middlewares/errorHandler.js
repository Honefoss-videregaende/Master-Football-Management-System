const { AppError } = require('./customErrors');

/**
 * Error Handler Middleware
 * Catches errors and sends appropriate responses to the client.
 */
const errorHandler = (err, req, res, next) => {
    // Log the error message for debugging purposes
    console.error(err.message);

    // Handle custom application errors
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: err.status,
            message: err.message
        });
    }

    // Handle generic errors
    res.status(500).json({
        status: 'error',
        message: 'Something went wrong. Please try again later.'
    });
};

module.exports = errorHandler;