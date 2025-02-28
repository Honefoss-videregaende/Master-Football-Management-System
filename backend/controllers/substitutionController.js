const substitutionService = require('../services/substitutionService');

/**
 * Substitution Controller
 * Handles HTTP requests related to the `Substitution` model.
 */
class SubstitutionController {
    /**
     * Create a new substitution.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async createSubstitution(req, res) {
        try {
            const substitution = await substitutionService.createSubstitution(req.body);
            res.status(201).json(substitution);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get a substitution by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getSubstitutionById(req, res) {
        try {
            const substitution = await substitutionService.getSubstitutionById(req.params.substitutionId);
            if (substitution) {
                res.status(200).json(substitution);
            } else {
                res.status(404).json({ message: 'Substitution not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get all substitutions.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getAllSubstitutions(req, res) {
        try {
            const substitutions = await substitutionService.getAllSubstitutions();
            res.status(200).json(substitutions);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Update a substitution by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async updateSubstitution(req, res) {
        try {
            const substitution = await substitutionService.updateSubstitution(req.params.substitutionId, req.body);
            if (substitution[0] > 0) {
                res.status(200).json({ message: 'Substitution updated successfully' });
            } else {
                res.status(404).json({ message: 'Substitution not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Delete a substitution by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async deleteSubstitution(req, res) {
        try {
            const result = await substitutionService.deleteSubstitution(req.params.substitutionId);
            if (result) {
                res.status(200).json({ message: 'Substitution deleted successfully' });
            } else {
                res.status(404).json({ message: 'Substitution not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new SubstitutionController();