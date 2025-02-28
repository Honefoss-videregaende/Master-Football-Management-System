const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, (req, res) => {
    res.send('This is a protected route. You have access because you provided a valid token.');
});

module.exports = router;