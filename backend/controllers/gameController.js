const gameService = require('../services/gameService');

/**
 * Game Controller
 * Handles HTTP requests related to the `Game` model.
 */
class GameController {
    /**
     * Create a new game.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async createGame(req, res) {
        try {
            const game = await gameService.createGame(req.body);
            res.status(201).json(game);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get a game by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getGameById(req, res) {
        try {
            const game = await gameService.getGameById(req.params.gameId);
            if (game) {
                res.status(200).json(game);
            } else {
                res.status(404).json({ message: 'Game not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get all games.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getAllGames(req, res) {
        try {
            const games = await gameService.getAllGames();
            res.status(200).json(games);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Update a game by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async updateGame(req, res) {
        try {
            const game = await gameService.updateGame(req.params.gameId, req.body);
            if (game[0] > 0) {
                res.status(200).json({ message: 'Game updated successfully' });
            } else {
                res.status(404).json({ message: 'Game not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Delete a game by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async deleteGame(req, res) {
        try {
            const result = await gameService.deleteGame(req.params.gameId);
            if (result) {
                res.status(200).json({ message: 'Game deleted successfully' });
            } else {
                res.status(404).json({ message: 'Game not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new GameController();