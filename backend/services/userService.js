// services/userService.js
const userRepository = require('../repositories/userRepository');
const bcrypt = require('bcrypt');

/**
 * Register a new user.
 * @param {object} userData - The user data to register.
 * @returns {Promise<User>} - The newly registered user object.
 * @throws {Error} - If the email is already registered.
 */
const registerUser = async (userData) => {
    const existingUser = await userRepository.findUserByEmail(userData.email);
    if (existingUser) {
        throw new Error('User with this email already exists');
    }

    // Hash the password for secure storage
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(userData.password, salt);

    // Create the user in the database
    const newUser = await userRepository.createUser({
        ...userData,
        passwordHash,
        salt,
    });

    return newUser;
};

/**
 * Authenticate a user during login.
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 * @returns {Promise<User>} - The authenticated user object.
 * @throws {Error} - If the user is not found or the password is invalid.
 */
const loginUser = async (email, password) => {
    const user = await userRepository.findUserByEmail(email);
    if (!user) {
        throw new Error('User not found');
    }

    // Compare the provided password with the stored hash
    const isValidPassword = await bcrypt.compare(password, user.passwordHash);
    if (!isValidPassword) {
        throw new Error('Invalid password');
    }

    return user;
};

/**
 * Update a user's profile.
 * @param {number} userId - The ID of the user to update.
 * @param {object} userData - The updated user data.
 * @returns {Promise<User>} - The updated user object.
 */
const updateUserProfile = async (userId, userData) => {
    return await userRepository.updateUser(userId, userData);
};

/**
 * Soft delete a user by setting `isActive` to 0.
 * @param {number} userId - The ID of the user to delete.
 * @returns {Promise<User>} - The updated user object.
 */
const deleteUser = async (userId) => {
    return await userRepository.deleteUser(userId);
};

module.exports = {
    registerUser,
    loginUser,
    updateUserProfile,
    deleteUser,
};