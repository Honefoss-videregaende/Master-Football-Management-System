const competitionTypeTranslationsService = require('../services/competitionTypeTranslationsService');

/**
 * CompetitionTypeTranslations Controller
 * Handles HTTP requests related to the `CompetitionTypeTranslations` model.
 */
class CompetitionTypeTranslationsController {
    /**
     * Create a new competition type translation.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async createCompetitionTypeTranslation(req, res) {
        try {
            const competitionTypeTranslation = await competitionTypeTranslationsService.createCompetitionTypeTranslation(req.body);
            res.status(201).json(competitionTypeTranslation);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get a competition type translation by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getCompetitionTypeTranslationById(req, res) {
        try {
            const competitionTypeTranslation = await competitionTypeTranslationsService.getCompetitionTypeTranslationById(req.params.translationId);
            if (competitionTypeTranslation) {
                res.status(200).json(competitionTypeTranslation);
            } else {
                res.status(404).json({ message: 'Competition type translation not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get all competition type translations.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getAllCompetitionTypeTranslations(req, res) {
        try {
            const competitionTypeTranslations = await competitionTypeTranslationsService.getAllCompetitionTypeTranslations();
            res.status(200).json(competitionTypeTranslations);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Update a competition type translation by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async updateCompetitionTypeTranslation(req, res) {
        try {
            const competitionTypeTranslation = await competitionTypeTranslationsService.updateCompetitionTypeTranslation(req.params.translationId, req.body);
            if (competitionTypeTranslation) {
                res.status(200).json({ message: 'Competition type translation updated successfully' });
            } else {
                res.status(404).json({ message: 'Competition type translation not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Delete a competition type translation by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async deleteCompetitionTypeTranslation(req, res) {
        try {
            const result = await competitionTypeTranslationsService.deleteCompetitionTypeTranslation(req.params.translationId);
            if (result) {
                res.status(200).json({ message: 'Competition type translation deleted successfully' });
            } else {
                res.status(404).json({ message: 'Competition type translation not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new CompetitionTypeTranslationsController();