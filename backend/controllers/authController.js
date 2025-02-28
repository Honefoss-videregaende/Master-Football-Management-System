const authService = require('../services/authService');

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
    async register(req, res) {
        try {
            const user = await authService.register(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Login a user.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async login(req, res) {
        try {
            const token = await authService.login(req.body);
            res.status(200).json({ token });
        } catch (error) {
            res.status(401).json({ error: error.message });
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
}

module.exports = new AuthController();