const morgan = require('morgan');
const logger = require('./logger');

// Define the stream for morgan to use winston for logging
const stream = {
    write: (message) => logger.info(message.trim())
};

// Define the morgan middleware
const requestLogger = morgan('combined', { stream });

module.exports = requestLogger;