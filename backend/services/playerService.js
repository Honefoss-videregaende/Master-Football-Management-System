const playerRepository = require('../repositories/playerRepository');

/**
 * Player Service
 * Handles business logic related to the `Player` model.
 */
class PlayerService {
    /**
     * Create a new player.
     * @param {Object} playerData - Data for the new player.
     * @returns {Promise<Object>} The created player.
     */
    async createPlayer(playerData) {
        return await playerRepository.createPlayer(playerData);
    }

    /**
     * Get a player by its ID.
     * @param {number} playerId - The ID of the player.
     * @returns {Promise<Object|null>} The player, or null if not found.
     */
    async getPlayerById(playerId) {
        return await playerRepository.getPlayerById(playerId);
    }

    /**
     * Get all players.
     * @returns {Promise<Array>} A list of all players.
     */
    async getAllPlayers() {
        return await playerRepository.getAllPlayers();
    }

    /**
     * Update a player by its ID.
     * @param {number} playerId - The ID of the player.
     * @param {Object} playerData - The new data for the player.
     * @returns {Promise<number>} The number of affected rows.
     */
    async updatePlayer(playerId, playerData) {
        return await playerRepository.updatePlayer(playerId, playerData);
    }

    /**
     * Delete a player by its ID.
     * @param {number} playerId - The ID of the player.
     * @returns {Promise<number>} The number of affected rows.
     */
    async deletePlayer(playerId) {
        return await playerRepository.deletePlayer(playerId);
    }
}

module.exports = new PlayerService();