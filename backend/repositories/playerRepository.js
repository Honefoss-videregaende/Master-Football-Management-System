const Player = require('../models/Player');

/**
 * Player Repository
 * Handles database operations related to the `Player` model.
 */
class PlayerRepository {
    /**
     * Create a new player.
     * @param {Object} playerData - Data for the new player.
     * @returns {Promise<Object>} The created player.
     */
    async createPlayer(playerData) {
        return await Player.create(playerData);
    }

    /**
     * Get a player by its ID.
     * @param {number} playerId - The ID of the player.
     * @returns {Promise<Object|null>} The player, or null if not found.
     */
    async getPlayerById(playerId) {
        return await Player.findByPk(playerId);
    }

    /**
     * Get all players.
     * @returns {Promise<Array>} A list of all players.
     */
    async getAllPlayers() {
        return await Player.findAll();
    }

    /**
     * Update a player by its ID.
     * @param {number} playerId - The ID of the player.
     * @param {Object} playerData - The new data for the player.
     * @returns {Promise<number>} The number of affected rows.
     */
    async updatePlayer(playerId, playerData) {
        return await Player.update(playerData, {
            where: { playerId }
        });
    }

    /**
     * Delete a player by its ID.
     * @param {number} playerId - The ID of the player.
     * @returns {Promise<number>} The number of affected rows.
     */
    async deletePlayer(playerId) {
        return await Player.destroy({
            where: { playerId }
        });
    }
}

module.exports = new PlayerRepository();