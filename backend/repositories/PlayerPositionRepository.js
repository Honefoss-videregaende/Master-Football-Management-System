// repositories/playerPositionRepository.js
const PlayerPosition = require('../models/PlayerPosition');

/**
 * Find a player position by its unique ID.
 * @param {number} positionId - The ID of the player position to find.
 * @returns {Promise<PlayerPosition>} - The player position object if found, otherwise null.
 */
const findPlayerPositionById = async (positionId) => {
    return await PlayerPosition.findByPk(positionId);
};

/**
 * Create a new player position in the database.
 * @param {object} playerPositionData - The player position data to insert into the database.
 * @returns {Promise<PlayerPosition>} - The newly created player position object.
 */
const createPlayerPosition = async (playerPositionData) => {
    return await PlayerPosition.create(playerPositionData);
};

/**
 * Update an existing player position in the database.
 * @param {number} positionId - The ID of the player position to update.
 * @param {object} playerPositionData - The updated player position data.
 * @returns {Promise<PlayerPosition>} - The updated player position object if found, otherwise null.
 */
const updatePlayerPosition = async (positionId, playerPositionData) => {
    const playerPosition = await PlayerPosition.findByPk(positionId);
    if (playerPosition) {
        return await playerPosition.update(playerPositionData);
    }
    return null;
};

/**
 * Delete a player position from the database.
 * @param {number} positionId - The ID of the player position to delete.
 * @returns {Promise<boolean>} - True if the player position was deleted, otherwise false.
 */
const deletePlayerPosition = async (positionId) => {
    const playerPosition = await PlayerPosition.findByPk(positionId);
    if (playerPosition) {
        await playerPosition.destroy();
        return true;
    }
    return false;
};

module.exports = {
    findPlayerPositionById,
    createPlayerPosition,
    updatePlayerPosition,
    deletePlayerPosition,
};