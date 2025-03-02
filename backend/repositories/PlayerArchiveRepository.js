// repositories/playerArchiveRepository.js
const PlayerArchive = require('../models/PlayerArchive');

/**
 * Find a player archive by its unique ID.
 * @param {number} playerArchiveId - The ID of the player archive to find.
 * @returns {Promise<PlayerArchive>} - The player archive object if found, otherwise null.
 */
const findPlayerArchiveById = async (playerArchiveId) => {
    return await PlayerArchive.findByPk(playerArchiveId);
};

/**
 * Create a new player archive in the database.
 * @param {object} playerArchiveData - The player archive data to insert into the database.
 * @returns {Promise<PlayerArchive>} - The newly created player archive object.
 */
const createPlayerArchive = async (playerArchiveData) => {
    return await PlayerArchive.create(playerArchiveData);
};

/**
 * Update an existing player archive in the database.
 * @param {number} playerArchiveId - The ID of the player archive to update.
 * @param {object} playerArchiveData - The updated player archive data.
 * @returns {Promise<PlayerArchive>} - The updated player archive object if found, otherwise null.
 */
const updatePlayerArchive = async (playerArchiveId, playerArchiveData) => {
    const playerArchive = await PlayerArchive.findByPk(playerArchiveId);
    if (playerArchive) {
        return await playerArchive.update(playerArchiveData);
    }
    return null;
};

/**
 * Delete a player archive from the database.
 * @param {number} playerArchiveId - The ID of the player archive to delete.
 * @returns {Promise<boolean>} - True if the player archive was deleted, otherwise false.
 */
const deletePlayerArchive = async (playerArchiveId) => {
    const playerArchive = await PlayerArchive.findByPk(playerArchiveId);
    if (playerArchive) {
        await playerArchive.destroy();
        return true;
    }
    return false;
};

module.exports = {
    findPlayerArchiveById,
    createPlayerArchive,
    updatePlayerArchive,
    deletePlayerArchive,
};