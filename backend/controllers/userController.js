// controllers/userController.js
const userService = require('../services/userService');

/**
 * Handle user registration.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const registerUser = async (req, res) => {
    try {
        const user = await userService.registerUser(req.body);
        res.status(201).json(user); // Return the newly created user
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

/**
 * Handle user login.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userService.loginUser(email, password);
        res.status(200).json(user); // Return the authenticated user
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

/**
 * Handle updating a user's profile.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const updateUserProfile = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = await userService.updateUserProfile(userId, req.body);
        res.status(200).json(user); // Return the updated user
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

/**
 * Handle soft deleting a user.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
const deleteUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        await userService.deleteUser(userId);
        res.status(204).send(); // No content response for successful deletion
    } catch (error) {
        res.status(400).json({ error: error.message }); // Handle errors
    }
};

module.exports = {
    registerUser,
    loginUser,
    updateUserProfile,
    deleteUser,
};