const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const rateLimiter = require('../middlewares/rateLimiter'); // Ensure this path is correct

const router = express.Router();

// Apply rate limiting middleware to all routes in this router
router.use(rateLimiter);

router.get('/', authMiddleware, (req, res) => {
    res.send('This is a protected route. You have access because you provided a valid token.');
});

module.exports = router;