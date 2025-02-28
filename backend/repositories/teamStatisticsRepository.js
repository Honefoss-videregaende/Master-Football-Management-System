const TeamStatistics = require('../models/TeamStatistics');

/**
 * TeamStatistics Repository
 * Handles database operations related to the `TeamStatistics` model.
 */
class TeamStatisticsRepository {
    /**
     * Create new team statistics.
     * @param {Object} statisticsData - Data for the new team statistics.
     * @returns {Promise<Object>} The created team statistics.
     */
    async createTeamStatistics(statisticsData) {
        return await TeamStatistics.create(statisticsData);
    }

    /**
     * Get team statistics by its ID.
     * @param {number} statisticId - The ID of the team statistics.
     * @returns {Promise<Object|null>} The team statistics, or null if not found.
     */
    async getTeamStatisticsById(statisticId) {
        return await TeamStatistics.findByPk(statisticId);
    }

    /**
     * Get all team statistics.
     * @returns {Promise<Array>} A list of all team statistics.
     */
    async getAllTeamStatistics() {
        return await TeamStatistics.findAll();
    }

    /**
     * Update team statistics by its ID.
     * @param {number} statisticId - The ID of the team statistics.
     * @param {Object} statisticsData - The new data for the team statistics.
     * @returns {Promise<number>} The number of affected rows.
     */
    async updateTeamStatistics(statisticId, statisticsData) {
        return await TeamStatistics.update(statisticsData, {
            where: { statisticId }
        });
    }

    /**
     * Delete team statistics by its ID.
     * @param {number} statisticId - The ID of the team statistics.
     * @returns {Promise<number>} The number of affected rows.
     */
    async deleteTeamStatistics(statisticId) {
        return await TeamStatistics.destroy({
            where: { statisticId }
        });
    }
}

module.exports = new TeamStatisticsRepository();