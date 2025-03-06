const express = require('express');
const { check, validationResult } = require('express-validator');
const authController = require('../controllers/authController');
const { BadRequestError } = require('../middlewares/customErrors');
const rateLimiter = require('../middlewares/rateLimiter');

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
], (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(new BadRequestError('Invalid input'));
    }
    authController.register(req, res, next);
});

// Route to login a user with validation
router.post('/login', rateLimiter, [
    check('email').isEmail().withMessage('Please enter a valid email address'),
    check('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(new BadRequestError('Invalid input'));
    }
    authController.login(req, res, next);
});

// Protected route
router.get('/protected', rateLimiter, authController.protected);

module.exports = router;