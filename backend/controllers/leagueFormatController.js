const leagueFormatService = require('../services/leagueFormatService');

/**
 * LeagueFormat Controller
 * Handles HTTP requests related to the `LeagueFormat` model.
 */
class LeagueFormatController {
    /**
     * Create a new league format.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async createLeagueFormat(req, res) {
        try {
            const leagueFormat = await leagueFormatService.createLeagueFormat(req.body);
            res.status(201).json(leagueFormat);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get a league format by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getLeagueFormatById(req, res) {
        try {
            const leagueFormat = await leagueFormatService.getLeagueFormatById(req.params.formatId);
            if (leagueFormat) {
                res.status(200).json(leagueFormat);
            } else {
                res.status(404).json({ message: 'League format not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get all league formats.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getAllLeagueFormats(req, res) {
        try {
            const leagueFormats = await leagueFormatService.getAllLeagueFormats();
            res.status(200).json(leagueFormats);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Update a league format by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async updateLeagueFormat(req, res) {
        try {
            const leagueFormat = await leagueFormatService.updateLeagueFormat(req.params.formatId, req.body);
            if (leagueFormat) {
                res.status(200).json({ message: 'League format updated successfully' });
            } else {
                res.status(404).json({ message: 'League format not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Delete a league format by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async deleteLeagueFormat(req, res) {
        try {
            const result = await leagueFormatService.deleteLeagueFormat(req.params.formatId);
            if (result) {
                res.status(200).json({ message: 'League format deleted successfully' });
            } else {
                res.status(404).json({ message: 'League format not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new LeagueFormatController();