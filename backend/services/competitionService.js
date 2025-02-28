const competitionRepository = require('../repositories/competitionRepository');

/**
 * Competition Service
 * Handles business logic related to the `Competition` model.
 */
class CompetitionService {
    /**
     * Create a new competition.
     * @param {Object} competitionData - Data for the new competition.
     * @returns {Promise<Object>} The created competition.
     */
    async createCompetition(competitionData) {
        return await competitionRepository.createCompetition(competitionData);
    }

    /**
     * Get a competition by its ID.
     * @param {number} competitionId - The ID of the competition.
     * @returns {Promise<Object|null>} The competition, or null if not found.
     */
    async getCompetitionById(competitionId) {
        return await competitionRepository.getCompetitionById(competitionId);
    }

    /**
     * Get all competitions.
     * @returns {Promise<Array>} A list of all competitions.
     */
    async getAllCompetitions() {
        return await competitionRepository.getAllCompetitions();
    }

    /**
     * Update a competition by its ID.
     * @param {number} competitionId - The ID of the competition.
     * @param {Object} competitionData - The new data for the competition.
     * @returns {Promise<number>} The number of affected rows.
     */
    async updateCompetition(competitionId, competitionData) {
        return await competitionRepository.updateCompetition(competitionId, competitionData);
    }

    /**
     * Delete a competition by its ID.
     * @param {number} competitionId - The ID of the competition.
     * @returns {Promise<number>} The number of affected rows.
     */
    async deleteCompetition(competitionId) {
        return await competitionRepository.deleteCompetition(competitionId);
    }
}

module.exports = new CompetitionService();