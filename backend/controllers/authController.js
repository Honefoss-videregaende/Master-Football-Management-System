const { body, validationResult } = require('express-validator');
const rateLimit = require('express-rate-limit');
const authService = require('../services/authService');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { BadRequestError } = require('../middlewares/customErrors');
require('dotenv').config();

/**
 * Rate limiter for login attempts to prevent brute force attacks.
 */
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit to 5 attempts per window
    message: 'Too many login attempts, please try again later'
});

/**
 * Auth Controller
 * Handles HTTP requests related to authentication.
 */
class AuthController {
    /**
     * Register a new user.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async register(req, res, next) {
        await body('username').isAlphanumeric().trim().escape().notEmpty().run(req);
        await body('email').isEmail().normalizeEmail().run(req);
        await body('password').isLength({ min: 6 }).run(req);

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(new BadRequestError('Invalid input'));
        }

        try {
            const { username, email, password, roleId } = req.body;
            const existingUser = await User.findOne({ where: { email } });
            if (existingUser) {
                return next(new BadRequestError('User already exists'));
            }

            const passwordHash = await bcrypt.hash(password, 10);
            const newUser = await User.create({ username, email, passwordHash, roleId });

            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            if (error.name === 'SequelizeUniqueConstraintError') {
                return next(new BadRequestError('Username must be unique'));
            }
            next(error);
        }
    }

    /**
     * Login a user.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async login(req, res, next) {
        await body('email').isEmail().normalizeEmail().run(req);
        await body('password').isLength({ min: 6 }).run(req);

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(new BadRequestError('Invalid input'));
        }

        try {
            const { email, password } = req.body;
            const user = await User.findOne({ where: { email } });
            if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
                return next(new BadRequestError('Invalid email or password'));
            }

            const token = jwt.sign(
                { userId: user.id, role: user.roleId },
                process.env.JWT_SECRET,
                { algorithm: 'HS256', expiresIn: '15m' }
            );

            res.status(200).json({ token });
        } catch (error) {
            next(error);
        }
    }

    /**
     * Reset password.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async resetPassword(req, res) {
        try {
            await authService.resetPassword(req.body);
            res.status(200).json({ message: 'Password reset successful' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Refresh token.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async refreshToken(req, res) {
        try {
            const token = await authService.refreshToken(req.body);
            res.status(200).json({ token });
        } catch (error) {
            res.status(401).json({ error: error.message });
        }
    }

    /**
     * Protected route.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    protected(req, res) {
        try {
            const authHeader = req.headers.authorization;
            if (!authHeader) {
                return res.status(401).json({ message: 'Access denied. No token provided.' });
            }

            const token = authHeader.split(' ')[1];
            if (!token) {
                return res.status(401).json({ message: 'Access denied. Invalid token format.' });
            }

            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            res.status(200).json({ message: 'Protected route accessed', userId: decoded.userId });
        } catch (error) {
            console.error('Token verification error:', error);
            res.status(400).json({ message: 'Invalid token' });
        }
    }
}

module.exports = new AuthController();
