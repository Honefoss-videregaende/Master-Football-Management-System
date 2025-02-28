// repositories/userRepository.js
const User = require('../models/User');

/**
 * Find a user by their unique ID.
 * @param {number} userId - The ID of the user to find.
 * @returns {Promise<User>} - The user object if found, otherwise null.
 */
const findUserById = async (userId) => {
    return await User.findByPk(userId);
};

/**
 * Find a user by their email address.
 * @param {string} email - The email address of the user to find.
 * @returns {Promise<User>} - The user object if found, otherwise null.
 */
const findUserByEmail = async (email) => {
    return await User.findOne({ where: { email } });
};

/**
 * Create a new user in the database.
 * @param {object} userData - The user data to insert into the database.
 * @returns {Promise<User>} - The newly created user object.
 */
const createUser = async (userData) => {
    return await User.create(userData);
};

/**
 * Update an existing user in the database.
 * @param {number} userId - The ID of the user to update.
 * @param {object} userData - The updated user data.
 * @returns {Promise<User>} - The updated user object if found, otherwise null.
 */
const updateUser = async (userId, userData) => {
    const user = await User.findByPk(userId);
    if (user) {
        return await user.update(userData);
    }
    return null;
};

/**
 * Soft delete a user by setting `isActive` to 0.
 * @param {number} userId - The ID of the user to delete.
 * @returns {Promise<User>} - The updated user object if found, otherwise null.
 */
const deleteUser = async (userId) => {
    const user = await User.findByPk(userId);
    if (user) {
        return await user.update({ isActive: 0 }); // Soft delete
    }
    return null;
};

module.exports = {
    findUserById,
    findUserByEmail,
    createUser,
    updateUser,
    deleteUser,
};