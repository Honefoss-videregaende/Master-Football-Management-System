const playerPositionService = require('../services/playerPositionService');

/**
 * PlayerPosition Controller
 * Handles HTTP requests related to the `PlayerPosition` model.
 */
class PlayerPositionController {
    /**
     * Create a new player position.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async createPlayerPosition(req, res) {
        try {
            const playerPosition = await playerPositionService.createPlayerPosition(req.body);
            res.status(201).json(playerPosition);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get a player position by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getPlayerPositionById(req, res) {
        try {
            const playerPosition = await playerPositionService.getPlayerPositionById(req.params.positionId);
            if (playerPosition) {
                res.status(200).json(playerPosition);
            } else {
                res.status(404).json({ message: 'Player position not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get all player positions.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getAllPlayerPositions(req, res) {
        try {
            const playerPositions = await playerPositionService.getAllPlayerPositions();
            res.status(200).json(playerPositions);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Update a player position by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async updatePlayerPosition(req, res) {
        try {
            const playerPosition = await playerPositionService.updatePlayerPosition(req.params.positionId, req.body);
            if (playerPosition) {
                res.status(200).json({ message: 'Player position updated successfully' });
            } else {
                res.status(404).json({ message: 'Player position not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Delete a player position by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async deletePlayerPosition(req, res) {
        try {
            const result = await playerPositionService.deletePlayerPosition(req.params.positionId);
            if (result) {
                res.status(200).json({ message: 'Player position deleted successfully' });
            } else {
                res.status(404).json({ message: 'Player position not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new PlayerPositionController();