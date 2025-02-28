const teamStatisticsRepository = require('../repositories/teamStatisticsRepository');

/**
 * TeamStatistics Service
 * Handles business logic related to the `TeamStatistics` model.
 */
class TeamStatisticsService {
    /**
     * Create new team statistics.
     * @param {Object} statisticsData - Data for the new team statistics.
     * @returns {Promise<Object>} The created team statistics.
     */
    async createTeamStatistics(statisticsData) {
        return await teamStatisticsRepository.createTeamStatistics(statisticsData);
    }

    /**
     * Get team statistics by its ID.
     * @param {number} statisticId - The ID of the team statistics.
     * @returns {Promise<Object|null>} The team statistics, or null if not found.
     */
    async getTeamStatisticsById(statisticId) {
        return await teamStatisticsRepository.getTeamStatisticsById(statisticId);
    }

    /**
     * Get all team statistics.
     * @returns {Promise<Array>} A list of all team statistics.
     */
    async getAllTeamStatistics() {
        return await teamStatisticsRepository.getAllTeamStatistics();
    }

    /**
     * Update team statistics by its ID.
     * @param {number} statisticId - The ID of the team statistics.
     * @param {Object} statisticsData - The new data for the team statistics.
     * @returns {Promise<number>} The number of affected rows.
     */
    async updateTeamStatistics(statisticId, statisticsData) {
        return await teamStatisticsRepository.updateTeamStatistics(statisticId, statisticsData);
    }

    /**
     * Delete team statistics by its ID.
     * @param {number} statisticId - The ID of the team statistics.
     * @returns {Promise<number>} The number of affected rows.
     */
    async deleteTeamStatistics(statisticId) {
        return await teamStatisticsRepository.deleteTeamStatistics(statisticId);
    }
}

module.exports = new TeamStatisticsService();