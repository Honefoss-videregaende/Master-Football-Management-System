const competitionService = require('../services/competitionService');

/**
 * Competition Controller
 * Handles HTTP requests related to the `Competition` model.
 */
class CompetitionController {
    /**
     * Create a new competition.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async createCompetition(req, res) {
        try {
            const competition = await competitionService.createCompetition(req.body);
            res.status(201).json(competition);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get a competition by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getCompetitionById(req, res) {
        try {
            const competition = await competitionService.getCompetitionById(req.params.competitionId);
            if (competition) {
                res.status(200).json(competition);
            } else {
                res.status(404).json({ message: 'Competition not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get all competitions.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getAllCompetitions(req, res) {
        try {
            const competitions = await competitionService.getAllCompetitions();
            res.status(200).json(competitions);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Update a competition by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async updateCompetition(req, res) {
        try {
            const competition = await competitionService.updateCompetition(req.params.competitionId, req.body);
            if (competition[0] > 0) {
                res.status(200).json({ message: 'Competition updated successfully' });
            } else {
                res.status(404).json({ message: 'Competition not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Delete a competition by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async deleteCompetition(req, res) {
        try {
            const result = await competitionService.deleteCompetition(req.params.competitionId);
            if (result) {
                res.status(200).json({ message: 'Competition deleted successfully' });
            } else {
                res.status(404).json({ message: 'Competition not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new CompetitionController();