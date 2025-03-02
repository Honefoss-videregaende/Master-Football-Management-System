const playerPositionRepository = require('../repositories/playerPositionRepository');

/**
 * PlayerPosition Service
 * Handles business logic related to the `PlayerPosition` model.
 */
class PlayerPositionService {
    /**
     * Create a new player position.
     * @param {Object} playerPositionData - Data for the new player position.
     * @returns {Promise<Object>} The created player position.
     */
    async createPlayerPosition(playerPositionData) {
        return await playerPositionRepository.createPlayerPosition(playerPositionData);
    }

    /**
     * Get a player position by its ID.
     * @param {number} positionId - The ID of the player position.
     * @returns {Promise<Object|null>} The player position, or null if not found.
     */
    async getPlayerPositionById(positionId) {
        return await playerPositionRepository.findPlayerPositionById(positionId);
    }

    /**
     * Update a player position by its ID.
     * @param {number} positionId - The ID of the player position.
     * @param {Object} playerPositionData - The new data for the player position.
     * @returns {Promise<Object>} The updated player position.
     */
    async updatePlayerPosition(positionId, playerPositionData) {
        return await playerPositionRepository.updatePlayerPosition(positionId, playerPositionData);
    }

    /**
     * Delete a player position by its ID.
     * @param {number} positionId - The ID of the player position.
     * @returns {Promise<boolean>} True if the player position was deleted, otherwise false.
     */
    async deletePlayerPosition(positionId) {
        return await playerPositionRepository.deletePlayerPosition(positionId);
    }
}

module.exports = new PlayerPositionService();