const Substitution = require('../models/Substitution');

/**
 * Substitution Repository
 * Handles database operations related to the `Substitution` model.
 */
class SubstitutionRepository {
    /**
     * Create a new substitution.
     * @param {Object} substitutionData - Data for the new substitution.
     * @returns {Promise<Object>} The created substitution.
     */
    async createSubstitution(substitutionData) {
        return await Substitution.create(substitutionData);
    }

    /**
     * Get a substitution by its ID.
     * @param {number} substitutionId - The ID of the substitution.
     * @returns {Promise<Object|null>} The substitution, or null if not found.
     */
    async getSubstitutionById(substitutionId) {
        return await Substitution.findByPk(substitutionId);
    }

    /**
     * Get all substitutions.
     * @returns {Promise<Array>} A list of all substitutions.
     */
    async getAllSubstitutions() {
        return await Substitution.findAll();
    }

    /**
     * Update a substitution by its ID.
     * @param {number} substitutionId - The ID of the substitution.
     * @param {Object} substitutionData - The new data for the substitution.
     * @returns {Promise<number>} The number of affected rows.
     */
    async updateSubstitution(substitutionId, substitutionData) {
        return await Substitution.update(substitutionData, {
            where: { substitutionId }
        });
    }

    /**
     * Delete a substitution by its ID.
     * @param {number} substitutionId - The ID of the substitution.
     * @returns {Promise<number>} The number of affected rows.
     */
    async deleteSubstitution(substitutionId) {
        return await Substitution.destroy({
            where: { substitutionId }
        });
    }
}

module.exports = new SubstitutionRepository();