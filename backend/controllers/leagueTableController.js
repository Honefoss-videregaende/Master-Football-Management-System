const leagueTableService = require('../services/leagueTableService');

/**
 * LeagueTable Controller
 * Handles HTTP requests related to the `LeagueTable` model.
 */
class LeagueTableController {
    /**
     * Create a new league table entry.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async createLeagueTable(req, res) {
        try {
            const leagueTable = await leagueTableService.createLeagueTable(req.body);
            res.status(201).json(leagueTable);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get a league table entry by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getLeagueTableById(req, res) {
        try {
            const leagueTable = await leagueTableService.getLeagueTableById(req.params.leagueTableId);
            if (leagueTable) {
                res.status(200).json(leagueTable);
            } else {
                res.status(404).json({ message: 'League table entry not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get all league table entries.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getAllLeagueTables(req, res) {
        try {
            const leagueTables = await leagueTableService.getAllLeagueTables();
            res.status(200).json(leagueTables);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Update a league table entry by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async updateLeagueTable(req, res) {
        try {
            const leagueTable = await leagueTableService.updateLeagueTable(req.params.leagueTableId, req.body);
            if (leagueTable[0] > 0) {
                res.status(200).json({ message: 'League table entry updated successfully' });
            } else {
                res.status(404).json({ message: 'League table entry not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Delete a league table entry by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async deleteLeagueTable(req, res) {
        try {
            const result = await leagueTableService.deleteLeagueTable(req.params.leagueTableId);
            if (result) {
                res.status(200).json({ message: 'League table entry deleted successfully' });
            } else {
                res.status(404).json({ message: 'League table entry not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new LeagueTableController();