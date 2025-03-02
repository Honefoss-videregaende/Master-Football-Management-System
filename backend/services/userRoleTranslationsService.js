const userRoleTranslationsRepository = require('../repositories/userRoleTranslationsRepository');

/**
 * UserRoleTranslations Service
 * Handles business logic related to the `UserRoleTranslations` model.
 */
class UserRoleTranslationsService {
    /**
     * Create a new user role translation.
     * @param {Object} userRoleTranslationData - Data for the new user role translation.
     * @returns {Promise<Object>} The created user role translation.
     */
    async createUserRoleTranslation(userRoleTranslationData) {
        return await userRoleTranslationsRepository.createUserRoleTranslation(userRoleTranslationData);
    }

    /**
     * Get a user role translation by its ID.
     * @param {number} translationId - The ID of the user role translation.
     * @returns {Promise<Object|null>} The user role translation, or null if not found.
     */
    async getUserRoleTranslationById(translationId) {
        return await userRoleTranslationsRepository.findUserRoleTranslationById(translationId);
    }

    /**
     * Update a user role translation by its ID.
     * @param {number} translationId - The ID of the user role translation.
     * @param {Object} userRoleTranslationData - The new data for the user role translation.
     * @returns {Promise<Object>} The updated user role translation.
     */
    async updateUserRoleTranslation(translationId, userRoleTranslationData) {
        return await userRoleTranslationsRepository.updateUserRoleTranslation(translationId, userRoleTranslationData);
    }

    /**
     * Delete a user role translation by its ID.
     * @param {number} translationId - The ID of the user role translation.
     * @returns {Promise<boolean>} True if the user role translation was deleted, otherwise false.
     */
    async deleteUserRoleTranslation(translationId) {
        return await userRoleTranslationsRepository.deleteUserRoleTranslation(translationId);
    }
}

module.exports = new UserRoleTranslationsService();