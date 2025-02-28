const Game = require('../models/Game');

/**
 * Game Repository
 * Handles database operations related to the `Game` model.
 */
class GameRepository {
    /**
     * Create a new game.
     * @param {Object} gameData - Data for the new game.
     * @returns {Promise<Object>} The created game.
     */
    async createGame(gameData) {
        return await Game.create(gameData);
    }

    /**
     * Get a game by its ID.
     * @param {number} gameId - The ID of the game.
     * @returns {Promise<Object|null>} The game, or null if not found.
     */
    async getGameById(gameId) {
        return await Game.findByPk(gameId);
    }

    /**
     * Get all games.
     * @returns {Promise<Array>} A list of all games.
     */
    async getAllGames() {
        return await Game.findAll();
    }

    /**
     * Update a game by its ID.
     * @param {number} gameId - The ID of the game.
     * @param {Object} gameData - The new data for the game.
     * @returns {Promise<number>} The number of affected rows.
     */
    async updateGame(gameId, gameData) {
        return await Game.update(gameData, {
            where: { gameId }
        });
    }

    /**
     * Delete a game by its ID.
     * @param {number} gameId - The ID of the game.
     * @returns {Promise<number>} The number of affected rows.
     */
    async deleteGame(gameId) {
        return await Game.destroy({
            where: { gameId }
        });
    }
}

module.exports = new GameRepository();