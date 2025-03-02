const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const rateLimiter = require('../middleware/rateLimiter');

const router = express.Router();

router.get('/', authMiddleware, rateLimiter, (req, res) => {
    res.send('This is a protected route. You have access because you provided a valid token.');
});

module.exports = router;