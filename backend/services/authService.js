const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

class AuthService {
    /**
     * Register a new user.
     * @param {Object} userData - The user data.
     * @returns {Object} The created user.
     */
    async register(userData) {
        const { username, email, password } = userData;

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        // Set the default role ID (e.g., 1 for regular user)
        const roleId = 1;

        // Create a new user
        const newUser = await User.create({
            username,
            email,
            passwordHash,
            roleId
        });

        return newUser;
    }

    /**
     * Login a user.
     * @param {Object} loginData - The login data.
     * @returns {String} The authentication token.
     */
    async login(loginData) {
        const { email, password } = loginData;

        // Find the user by email
        const user = await User.findOne({ where: { email } });
        if (!user) {
            throw new Error('Invalid email or password');
        }

        // Check the password
        const isMatch = await bcrypt.compare(password, user.passwordHash);
        if (!isMatch) {
            throw new Error('Invalid email or password');
        }

        // Generate a JWT token
        const token = jwt.sign({ userId: user.userId, roleId: user.roleId }, process.env.JWT_SECRET, { expiresIn: '1h' });

        return token;
    }

    /**
     * Reset password.
     * @param {Object} resetData - The reset data.
     */
    async resetPassword(resetData) {
        // Implement reset password logic here
    }

    /**
     * Refresh token.
     * @param {Object} refreshData - The refresh data.
     * @returns {String} The new authentication token.
     */
    async refreshToken(refreshData) {
        // Implement refresh token logic here
    }
}

module.exports = new AuthService();