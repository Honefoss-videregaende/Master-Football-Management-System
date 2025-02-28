/**
 * Logger Middleware
 * Logs incoming requests.
 */
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

module.exports = logger;