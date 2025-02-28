const gameRepository = require('../repositories/gameRepository');

/**
 * Game Service
 * Handles business logic related to the `Game` model.
 */
class GameService {
    /**
     * Create a new game.
     * @param {Object} gameData - Data for the new game.
     * @returns {Promise<Object>} The created game.
     */
    async createGame(gameData) {
        return await gameRepository.createGame(gameData);
    }

    /**
     * Get a game by its ID.
     * @param {number} gameId - The ID of the game.
     * @returns {Promise<Object|null>} The game, or null if not found.
     */
    async getGameById(gameId) {
        return await gameRepository.getGameById(gameId);
    }

    /**
     * Get all games.
     * @returns {Promise<Array>} A list of all games.
     */
    async getAllGames() {
        return await gameRepository.getAllGames();
    }

    /**
     * Update a game by its ID.
     * @param {number} gameId - The ID of the game.
     * @param {Object} gameData - The new data for the game.
     * @returns {Promise<number>} The number of affected rows.
     */
    async updateGame(gameId, gameData) {
        return await gameRepository.updateGame(gameId, gameData);
    }

    /**
     * Delete a game by its ID.
     * @param {number} gameId - The ID of the game.
     * @returns {Promise<number>} The number of affected rows.
     */
    async deleteGame(gameId) {
        return await gameRepository.deleteGame(gameId);
    }
}

module.exports = new GameService();