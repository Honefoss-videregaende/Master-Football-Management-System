// repositories/userRoleTranslationsRepository.js
const UserRoleTranslations = require('../models/UserRoleTranslations');

/**
 * Find a user role translation by its unique ID.
 * @param {number} translationId - The ID of the user role translation to find.
 * @returns {Promise<UserRoleTranslations>} - The user role translation object if found, otherwise null.
 */
const findUserRoleTranslationById = async (translationId) => {
    return await UserRoleTranslations.findByPk(translationId);
};

/**
 * Create a new user role translation in the database.
 * @param {object} userRoleTranslationData - The user role translation data to insert into the database.
 * @returns {Promise<UserRoleTranslations>} - The newly created user role translation object.
 */
const createUserRoleTranslation = async (userRoleTranslationData) => {
    return await UserRoleTranslations.create(userRoleTranslationData);
};

/**
 * Update an existing user role translation in the database.
 * @param {number} translationId - The ID of the user role translation to update.
 * @param {object} userRoleTranslationData - The updated user role translation data.
 * @returns {Promise<UserRoleTranslations>} - The updated user role translation object if found, otherwise null.
 */
const updateUserRoleTranslation = async (translationId, userRoleTranslationData) => {
    const userRoleTranslation = await UserRoleTranslations.findByPk(translationId);
    if (userRoleTranslation) {
        return await userRoleTranslation.update(userRoleTranslationData);
    }
    return null;
};

/**
 * Delete a user role translation from the database.
 * @param {number} translationId - The ID of the user role translation to delete.
 * @returns {Promise<boolean>} - True if the user role translation was deleted, otherwise false.
 */
const deleteUserRoleTranslation = async (translationId) => {
    const userRoleTranslation = await UserRoleTranslations.findByPk(translationId);
    if (userRoleTranslation) {
        await userRoleTranslation.destroy();
        return true;
    }
    return false;
};

module.exports = {
    findUserRoleTranslationById,
    createUserRoleTranslation,
    updateUserRoleTranslation,
    deleteUserRoleTranslation,
};