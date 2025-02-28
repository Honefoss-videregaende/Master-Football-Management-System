const playerService = require('../services/playerService');

/**
 * Player Controller
 * Handles HTTP requests related to the `Player` model.
 */
class PlayerController {
    /**
     * Create a new player.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async createPlayer(req, res) {
        try {
            const player = await playerService.createPlayer(req.body);
            res.status(201).json(player);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get a player by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getPlayerById(req, res) {
        try {
            const player = await playerService.getPlayerById(req.params.playerId);
            if (player) {
                res.status(200).json(player);
            } else {
                res.status(404).json({ message: 'Player not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get all players.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getAllPlayers(req, res) {
        try {
            const players = await playerService.getAllPlayers();
            res.status(200).json(players);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Update a player by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async updatePlayer(req, res) {
        try {
            const player = await playerService.updatePlayer(req.params.playerId, req.body);
            if (player[0] > 0) {
                res.status(200).json({ message: 'Player updated successfully' });
            } else {
                res.status(404).json({ message: 'Player not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Delete a player by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async deletePlayer(req, res) {
        try {
            const result = await playerService.deletePlayer(req.params.playerId);
            if (result) {
                res.status(200).json({ message: 'Player deleted successfully' });
            } else {
                res.status(404).json({ message: 'Player not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new PlayerController();