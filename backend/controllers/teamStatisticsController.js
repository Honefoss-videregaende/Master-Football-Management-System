const teamStatisticsService = require('../services/teamStatisticsService');

/**
 * TeamStatistics Controller
 * Handles HTTP requests related to the `TeamStatistics` model.
 */
class TeamStatisticsController {
    /**
     * Create new team statistics.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async createTeamStatistics(req, res) {
        try {
            const teamStatistics = await teamStatisticsService.createTeamStatistics(req.body);
            res.status(201).json(teamStatistics);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get team statistics by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getTeamStatisticsById(req, res) {
        try {
            const teamStatistics = await teamStatisticsService.getTeamStatisticsById(req.params.statisticId);
            if (teamStatistics) {
                res.status(200).json(teamStatistics);
            } else {
                res.status(404).json({ message: 'Team statistics not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get all team statistics.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getAllTeamStatistics(req, res) {
        try {
            const teamStatistics = await teamStatisticsService.getAllTeamStatistics();
            res.status(200).json(teamStatistics);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Update team statistics by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async updateTeamStatistics(req, res) {
        try {
            const teamStatistics = await teamStatisticsService.updateTeamStatistics(req.params.statisticId, req.body);
            if (teamStatistics[0] > 0) {
                res.status(200).json({ message: 'Team statistics updated successfully' });
            } else {
                res.status(404).json({ message: 'Team statistics not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Delete team statistics by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async deleteTeamStatistics(req, res) {
        try {
            const result = await teamStatisticsService.deleteTeamStatistics(req.params.statisticId);
            if (result) {
                res.status(200).json({ message: 'Team statistics deleted successfully' });
            } else {
                res.status(404).json({ message: 'Team statistics not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new TeamStatisticsController();