const Competition = require('../models/Competition');

/**
 * Competition Repository
 * Handles database operations related to the `Competition` model.
 */
class CompetitionRepository {
    /**
     * Create a new competition.
     * @param {Object} competitionData - Data for the new competition.
     * @returns {Promise<Object>} The created competition.
     */
    async createCompetition(competitionData) {
        return await Competition.create(competitionData);
    }

    /**
     * Get a competition by its ID.
     * @param {number} competitionId - The ID of the competition.
     * @returns {Promise<Object|null>} The competition, or null if not found.
     */
    async getCompetitionById(competitionId) {
        return await Competition.findByPk(competitionId);
    }

    /**
     * Get all competitions.
     * @returns {Promise<Array>} A list of all competitions.
     */
    async getAllCompetitions() {
        return await Competition.findAll();
    }

    /**
     * Update a competition by its ID.
     * @param {number} competitionId - The ID of the competition.
     * @param {Object} competitionData - The new data for the competition.
     * @returns {Promise<number>} The number of affected rows.
     */
    async updateCompetition(competitionId, competitionData) {
        return await Competition.update(competitionData, {
            where: { competitionId }
        });
    }

    /**
     * Delete a competition by its ID.
     * @param {number} competitionId - The ID of the competition.
     * @returns {Promise<number>} The number of affected rows.
     */
    async deleteCompetition(competitionId) {
        return await Competition.destroy({
            where: { competitionId }
        });
    }
}

module.exports = new CompetitionRepository();