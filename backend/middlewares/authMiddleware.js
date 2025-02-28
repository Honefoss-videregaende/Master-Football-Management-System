const jwt = require('jsonwebtoken');
require('dotenv').config();

/**
 * Auth Middleware
 * Checks if the user is authenticated by verifying the JWT token.
 */
const authMiddleware = (req, res, next) => {
    // Get the token from the Authorization header
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Attach the decoded user information to the request object
        req.user = decoded;
        // Proceed to the next middleware or route handler
        next();
    } catch (ex) {
        // Handle invalid token
        res.status(400).json({ error: 'Invalid token.' });
    }
};

module.exports = authMiddleware;