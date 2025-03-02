const express = require('express');
const { check, validationResult } = require('express-validator');
const authController = require('../controllers/authController');
const rateLimiter = require('../middlewares/rateLimiter'); // Ensure this path is correct

const router = express.Router();

/**
 * Auth Routes
 * Defines the routes for authentication-related operations.
 */

// Route to register a new user with validation
router.post('/register', rateLimiter, [
    check('username').notEmpty().withMessage('Username is required'),
    check('email').isEmail().withMessage('Please enter a valid email address'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    authController.register(req, res);
});

// Route to login a user with validation
router.post('/login', rateLimiter, [
    check('email').isEmail().withMessage('Please enter a valid email address'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    authController.login(req, res);
});

// Protected route
router.get('/protected', rateLimiter, authController.protected);

module.exports = router;