const express = require('express');
const { body, param, validationResult } = require('express-validator');
const UserController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

/**
 * Validate and handle errors
 */
const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

/**
 * User Routes
 */

// Register a new user
router.post('/register', [
    body('username').isAlphanumeric().trim().escape().notEmpty().withMessage('Username is required'),
    body('email').isEmail().normalizeEmail().withMessage('Invalid email format'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], validate, UserController.registerUser);

// Login a user
router.post('/login', [
    body('email').isEmail().normalizeEmail().withMessage('Invalid email format'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], validate, UserController.loginUser);

// Update user profile
router.put('/profile/:userId', authMiddleware, [
    param('userId').isInt().withMessage('User ID must be an integer'),
    body('username').optional().isAlphanumeric().trim().escape().withMessage('Username should only contain letters and numbers'),
    body('email').optional().isEmail().normalizeEmail().withMessage('Invalid email format'),
    body('password').optional().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], validate, UserController.updateUserProfile);

// Delete a user
router.delete('/delete/:userId', authMiddleware, [
    param('userId').isInt().withMessage('User ID must be an integer')
], validate, UserController.deleteUser);

module.exports = router;