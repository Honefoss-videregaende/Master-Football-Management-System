const gameStatusTranslationsService = require('../services/gameStatusTranslationsService');

/**
 * GameStatusTranslations Controller
 * Handles HTTP requests related to the `GameStatusTranslations` model.
 */
class GameStatusTranslationsController {
    /**
     * Create a new game status translation.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async createGameStatusTranslation(req, res) {
        try {
            const gameStatusTranslation = await gameStatusTranslationsService.createGameStatusTranslation(req.body);
            res.status(201).json(gameStatusTranslation);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get a game status translation by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getGameStatusTranslationById(req, res) {
        try {
            const gameStatusTranslation = await gameStatusTranslationsService.getGameStatusTranslationById(req.params.translationId);
            if (gameStatusTranslation) {
                res.status(200).json(gameStatusTranslation);
            } else {
                res.status(404).json({ message: 'Game status translation not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get all game status translations.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getAllGameStatusTranslations(req, res) {
        try {
            const gameStatusTranslations = await gameStatusTranslationsService.getAllGameStatusTranslations();
            res.status(200).json(gameStatusTranslations);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Update a game status translation by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async updateGameStatusTranslation(req, res) {
        try {
            const gameStatusTranslation = await gameStatusTranslationsService.updateGameStatusTranslation(req.params.translationId, req.body);
            if (gameStatusTranslation) {
                res.status(200).json({ message: 'Game status translation updated successfully' });
            } else {
                res.status(404).json({ message: 'Game status translation not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Delete a game status translation by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async deleteGameStatusTranslation(req, res) {
        try {
            const result = await gameStatusTranslationsService.deleteGameStatusTranslation(req.params.translationId);
            if (result) {
                res.status(200).json({ message: 'Game status translation deleted successfully' });
            } else {
                res.status(404).json({ message: 'Game status translation not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new GameStatusTranslationsController();