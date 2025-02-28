// services/gameStatusService.js
const gameStatusRepository = require('../repositories/gameStatusRepository');

/**
 * Create a new game status.
 * @param {object} statusData - The game status data to create.
 * @returns {Promise<GameStatus>} - The newly created game status object.
 * @throws {Error} - If the game status name already exists.
 */
const createStatus = async (statusData) => {
    const existingStatus = await gameStatusRepository.findStatusByName(statusData.statusName);
    if (existingStatus) {
        throw new Error('Game status with this name already exists');
    }
    return await gameStatusRepository.createStatus(statusData);
};

/**
 * Update an existing game status.
 * @param {number} statusId - The ID of the game status to update.
 * @param {object} statusData - The updated game status data.
 * @returns {Promise<GameStatus>} - The updated game status object.
 * @throws {Error} - If the game status is not found.
 */
const updateStatus = async (statusId, statusData) => {
    const status = await gameStatusRepository.updateStatus(statusId, statusData);
    if (!status) {
        throw new Error('Game status not found');
    }
    return status;
};

/**
 * Delete a game status.
 * @param {number} statusId - The ID of the game status to delete.
 * @returns {Promise<boolean>} - True if the game status was deleted, otherwise false.
 * @throws {Error} - If the game status is not found.
 */
const deleteStatus = async (statusId) => {
    const isDeleted = await gameStatusRepository.deleteStatus(statusId);
    if (!isDeleted) {
        throw new Error('Game status not found');
    }
    return true;
};

/**
 * Get a game status by its ID.
 * @param {number} statusId - The ID of the game status to retrieve.
 * @returns {Promise<GameStatus>} - The game status object.
 * @throws {Error} - If the game status is not found.
 */
const getStatusById = async (statusId) => {
    const status = await gameStatusRepository.findStatusById(statusId);
    if (!status) {
        throw new Error('Game status not found');
    }
    return status;
};

/**
 * Get a game status by its name.
 * @param {string} statusName - The name of the game status to retrieve.
 * @returns {Promise<GameStatus>} - The game status object.
 * @throws {Error} - If the game status is not found.
 */
const getStatusByName = async (statusName) => {
    const status = await gameStatusRepository.findStatusByName(statusName);
    if (!status) {
        throw new Error('Game status not found');
    }
    return status;
};

module.exports = {
    createStatus,
    updateStatus,
    deleteStatus,
    getStatusById,
    getStatusByName,
};