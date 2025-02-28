// repositories/gameStatusRepository.js
const GameStatus = require('../models/GameStatus');

/**
 * Find a game status by its unique ID.
 * @param {number} statusId - The ID of the game status to find.
 * @returns {Promise<GameStatus>} - The game status object if found, otherwise null.
 */
const findStatusById = async (statusId) => {
    return await GameStatus.findByPk(statusId);
};

/**
 * Find a game status by its name.
 * @param {string} statusName - The name of the game status to find.
 * @returns {Promise<GameStatus>} - The game status object if found, otherwise null.
 */
const findStatusByName = async (statusName) => {
    return await GameStatus.findOne({ where: { statusName } });
};

/**
 * Create a new game status in the database.
 * @param {object} statusData - The game status data to insert into the database.
 * @returns {Promise<GameStatus>} - The newly created game status object.
 */
const createStatus = async (statusData) => {
    return await GameStatus.create(statusData);
};

/**
 * Update an existing game status in the database.
 * @param {number} statusId - The ID of the game status to update.
 * @param {object} statusData - The updated game status data.
 * @returns {Promise<GameStatus>} - The updated game status object if found, otherwise null.
 */
const updateStatus = async (statusId, statusData) => {
    const status = await GameStatus.findByPk(statusId);
    if (status) {
        return await status.update(statusData);
    }
    return null;
};

/**
 * Delete a game status from the database.
 * @param {number} statusId - The ID of the game status to delete.
 * @returns {Promise<boolean>} - True if the game status was deleted, otherwise false.
 */
const deleteStatus = async (statusId) => {
    const status = await GameStatus.findByPk(statusId);
    if (status) {
        await status.destroy();
        return true;
    }
    return false;
};

module.exports = {
    findStatusById,
    findStatusByName,
    createStatus,
    updateStatus,
    deleteStatus,
};