const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf, colorize } = format;

// Define the custom format for log messages
const logFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
});

// Create the logger instance
const logger = createLogger({
    format: combine(
        colorize(),
        timestamp(),
        logFormat
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'logs/error.log', level: 'error' }),
        new transports.File({ filename: 'logs/combined.log' })
    ]
});

module.exports = logger;