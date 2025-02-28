const teamService = require('../services/teamService');

/**
 * Team Controller
 * Handles HTTP requests related to the `Team` model.
 */
class TeamController {
    /**
     * Create a new team.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async createTeam(req, res) {
        try {
            const team = await teamService.createTeam(req.body);
            res.status(201).json(team);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get a team by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getTeamById(req, res) {
        try {
            const team = await teamService.getTeamById(req.params.teamId);
            if (team) {
                res.status(200).json(team);
            } else {
                res.status(404).json({ message: 'Team not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get all teams.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getAllTeams(req, res) {
        try {
            const teams = await teamService.getAllTeams();
            res.status(200).json(teams);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Update a team by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async updateTeam(req, res) {
        try {
            const team = await teamService.updateTeam(req.params.teamId, req.body);
            if (team[0] > 0) {
                res.status(200).json({ message: 'Team updated successfully' });
            } else {
                res.status(404).json({ message: 'Team not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Delete a team by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async deleteTeam(req, res) {
        try {
            const result = await teamService.deleteTeam(req.params.teamId);
            if (result) {
                res.status(200).json({ message: 'Team deleted successfully' });
            } else {
                res.status(404).json({ message: 'Team not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new TeamController();