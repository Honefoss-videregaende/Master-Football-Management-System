const playerArchiveRepository = require('../repositories/playerArchiveRepository');

/**
 * PlayerArchive Service
 * Handles business logic related to the `PlayerArchive` model.
 */
class PlayerArchiveService {
    /**
     * Create a new player archive.
     * @param {Object} playerArchiveData - Data for the new player archive.
     * @returns {Promise<Object>} The created player archive.
     */
    async createPlayerArchive(playerArchiveData) {
        return await playerArchiveRepository.createPlayerArchive(playerArchiveData);
    }

    /**
     * Get a player archive by its ID.
     * @param {number} playerArchiveId - The ID of the player archive.
     * @returns {Promise<Object|null>} The player archive, or null if not found.
     */
    async getPlayerArchiveById(playerArchiveId) {
        return await playerArchiveRepository.findPlayerArchiveById(playerArchiveId);
    }

    /**
     * Update a player archive by its ID.
     * @param {number} playerArchiveId - The ID of the player archive.
     * @param {Object} playerArchiveData - The new data for the player archive.
     * @returns {Promise<Object>} The updated player archive.
     */
    async updatePlayerArchive(playerArchiveId, playerArchiveData) {
        return await playerArchiveRepository.updatePlayerArchive(playerArchiveId, playerArchiveData);
    }

    /**
     * Delete a player archive by its ID.
     * @param {number} playerArchiveId - The ID of the player archive.
     * @returns {Promise<boolean>} True if the player archive was deleted, otherwise false.
     */
    async deletePlayerArchive(playerArchiveId) {
        return await playerArchiveRepository.deletePlayerArchive(playerArchiveId);
    }
}

module.exports = new PlayerArchiveService();