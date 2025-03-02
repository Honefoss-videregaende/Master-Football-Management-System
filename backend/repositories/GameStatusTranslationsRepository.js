// repositories/gameStatusTranslationsRepository.js
const GameStatusTranslations = require('../models/GameStatusTranslations');

/**
 * Find a game status translation by its unique ID.
 * @param {number} translationId - The ID of the game status translation to find.
 * @returns {Promise<GameStatusTranslations>} - The game status translation object if found, otherwise null.
 */
const findGameStatusTranslationById = async (translationId) => {
    return await GameStatusTranslations.findByPk(translationId);
};

/**
 * Create a new game status translation in the database.
 * @param {object} gameStatusTranslationData - The game status translation data to insert into the database.
 * @returns {Promise<GameStatusTranslations>} - The newly created game status translation object.
 */
const createGameStatusTranslation = async (gameStatusTranslationData) => {
    return await GameStatusTranslations.create(gameStatusTranslationData);
};

/**
 * Update an existing game status translation in the database.
 * @param {number} translationId - The ID of the game status translation to update.
 * @param {object} gameStatusTranslationData - The updated game status translation data.
 * @returns {Promise<GameStatusTranslations>} - The updated game status translation object if found, otherwise null.
 */
const updateGameStatusTranslation = async (translationId, gameStatusTranslationData) => {
    const gameStatusTranslation = await GameStatusTranslations.findByPk(translationId);
    if (gameStatusTranslation) {
        return await gameStatusTranslation.update(gameStatusTranslationData);
    }
    return null;
};

/**
 * Delete a game status translation from the database.
 * @param {number} translationId - The ID of the game status translation to delete.
 * @returns {Promise<boolean>} - True if the game status translation was deleted, otherwise false.
 */
const deleteGameStatusTranslation = async (translationId) => {
    const gameStatusTranslation = await GameStatusTranslations.findByPk(translationId);
    if (gameStatusTranslation) {
        await gameStatusTranslation.destroy();
        return true;
    }
    return false;
};

module.exports = {
    findGameStatusTranslationById,
    createGameStatusTranslation,
    updateGameStatusTranslation,
    deleteGameStatusTranslation,
};