const gameStatusTranslationsRepository = require('../repositories/gameStatusTranslationsRepository');

/**
 * GameStatusTranslations Service
 * Handles business logic related to the `GameStatusTranslations` model.
 */
class GameStatusTranslationsService {
    /**
     * Create a new game status translation.
     * @param {Object} gameStatusTranslationData - Data for the new game status translation.
     * @returns {Promise<Object>} The created game status translation.
     */
    async createGameStatusTranslation(gameStatusTranslationData) {
        return await gameStatusTranslationsRepository.createGameStatusTranslation(gameStatusTranslationData);
    }

    /**
     * Get a game status translation by its ID.
     * @param {number} translationId - The ID of the game status translation.
     * @returns {Promise<Object|null>} The game status translation, or null if not found.
     */
    async getGameStatusTranslationById(translationId) {
        return await gameStatusTranslationsRepository.findGameStatusTranslationById(translationId);
    }

    /**
     * Update a game status translation by its ID.
     * @param {number} translationId - The ID of the game status translation.
     * @param {Object} gameStatusTranslationData - The new data for the game status translation.
     * @returns {Promise<Object>} The updated game status translation.
     */
    async updateGameStatusTranslation(translationId, gameStatusTranslationData) {
        return await gameStatusTranslationsRepository.updateGameStatusTranslation(translationId, gameStatusTranslationData);
    }

    /**
     * Delete a game status translation by its ID.
     * @param {number} translationId - The ID of the game status translation.
     * @returns {Promise<boolean>} True if the game status translation was deleted, otherwise false.
     */
    async deleteGameStatusTranslation(translationId) {
        return await gameStatusTranslationsRepository.deleteGameStatusTranslation(translationId);
    }
}

module.exports = new GameStatusTranslationsService();