const substitutionRepository = require('../repositories/substitutionRepository');

/**
 * Substitution Service
 * Handles business logic related to the `Substitution` model.
 */
class SubstitutionService {
    /**
     * Create a new substitution.
     * @param {Object} substitutionData - Data for the new substitution.
     * @returns {Promise<Object>} The created substitution.
     */
    async createSubstitution(substitutionData) {
        return await substitutionRepository.createSubstitution(substitutionData);
    }

    /**
     * Get a substitution by its ID.
     * @param {number} substitutionId - The ID of the substitution.
     * @returns {Promise<Object|null>} The substitution, or null if not found.
     */
    async getSubstitutionById(substitutionId) {
        return await substitutionRepository.getSubstitutionById(substitutionId);
    }

    /**
     * Get all substitutions.
     * @returns {Promise<Array>} A list of all substitutions.
     */
    async getAllSubstitutions() {
        return await substitutionRepository.getAllSubstitutions();
    }

    /**
     * Update a substitution by its ID.
     * @param {number} substitutionId - The ID of the substitution.
     * @param {Object} substitutionData - The new data for the substitution.
     * @returns {Promise<number>} The number of affected rows.
     */
    async updateSubstitution(substitutionId, substitutionData) {
        return await substitutionRepository.updateSubstitution(substitutionId, substitutionData);
    }

    /**
     * Delete a substitution by its ID.
     * @param {number} substitutionId - The ID of the substitution.
     * @returns {Promise<number>} The number of affected rows.
     */
    async deleteSubstitution(substitutionId) {
        return await substitutionRepository.deleteSubstitution(substitutionId);
    }
}

module.exports = new SubstitutionService();