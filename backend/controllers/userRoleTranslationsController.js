const userRoleTranslationsService = require('../services/userRoleTranslationsService');

/**
 * UserRoleTranslations Controller
 * Handles HTTP requests related to the `UserRoleTranslations` model.
 */
class UserRoleTranslationsController {
    /**
     * Create a new user role translation.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async createUserRoleTranslation(req, res) {
        try {
            const userRoleTranslation = await userRoleTranslationsService.createUserRoleTranslation(req.body);
            res.status(201).json(userRoleTranslation);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get a user role translation by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getUserRoleTranslationById(req, res) {
        try {
            const userRoleTranslation = await userRoleTranslationsService.getUserRoleTranslationById(req.params.translationId);
            if (userRoleTranslation) {
                res.status(200).json(userRoleTranslation);
            } else {
                res.status(404).json({ message: 'User role translation not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get all user role translations.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getAllUserRoleTranslations(req, res) {
        try {
            const userRoleTranslations = await userRoleTranslationsService.getAllUserRoleTranslations();
            res.status(200).json(userRoleTranslations);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Update a user role translation by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async updateUserRoleTranslation(req, res) {
        try {
            const userRoleTranslation = await userRoleTranslationsService.updateUserRoleTranslation(req.params.translationId, req.body);
            if (userRoleTranslation) {
                res.status(200).json({ message: 'User role translation updated successfully' });
            } else {
                res.status(404).json({ message: 'User role translation not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Delete a user role translation by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async deleteUserRoleTranslation(req, res) {
        try {
            const result = await userRoleTranslationsService.deleteUserRoleTranslation(req.params.translationId);
            if (result) {
                res.status(200).json({ message: 'User role translation deleted successfully' });
            } else {
                res.status(404).json({ message: 'User role translation not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new UserRoleTranslationsController();