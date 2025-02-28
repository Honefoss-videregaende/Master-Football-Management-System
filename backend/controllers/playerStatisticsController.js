const playerStatisticsService = require('../services/playerStatisticsService');

/**
 * PlayerStatistics Controller
 * Handles HTTP requests related to the `PlayerStatistics` model.
 */
class PlayerStatisticsController {
    /**
     * Create new player statistics.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async createPlayerStatistics(req, res) {
        try {
            const playerStatistics = await playerStatisticsService.createPlayerStatistics(req.body);
            res.status(201).json(playerStatistics);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get player statistics by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getPlayerStatisticsById(req, res) {
        try {
            const playerStatistics = await playerStatisticsService.getPlayerStatisticsById(req.params.statisticId);
            if (playerStatistics) {
                res.status(200).json(playerStatistics);
            } else {
                res.status(404).json({ message: 'Player statistics not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get all player statistics.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getAllPlayerStatistics(req, res) {
        try {
            const playerStatistics = await playerStatisticsService.getAllPlayerStatistics();
            res.status(200).json(playerStatistics);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Update player statistics by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async updatePlayerStatistics(req, res) {
        try {
            const playerStatistics = await playerStatisticsService.updatePlayerStatistics(req.params.statisticId, req.body);
            if (playerStatistics[0] > 0) {
                res.status(200).json({ message: 'Player statistics updated successfully' });
            } else {
                res.status(404).json({ message: 'Player statistics not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Delete player statistics by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async deletePlayerStatistics(req, res) {
        try {
            const result = await playerStatisticsService.deletePlayerStatistics(req.params.statisticId);
            if (result) {
                res.status(200).json({ message: 'Player statistics deleted successfully' });
            } else {
                res.status(404).json({ message: 'Player statistics not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new PlayerStatisticsController();