const PlayerStatistics = require('../models/PlayerStatistics');

/**
 * PlayerStatistics Repository
 * Handles database operations related to the `PlayerStatistics` model.
 */
class PlayerStatisticsRepository {
    /**
     * Create new player statistics.
     * @param {Object} statisticsData - Data for the new player statistics.
     * @returns {Promise<Object>} The created player statistics.
     */
    async createPlayerStatistics(statisticsData) {
        return await PlayerStatistics.create(statisticsData);
    }

    /**
     * Get player statistics by its ID.
     * @param {number} statisticId - The ID of the player statistics.
     * @returns {Promise<Object|null>} The player statistics, or null if not found.
     */
    async getPlayerStatisticsById(statisticId) {
        return await PlayerStatistics.findByPk(statisticId);
    }

    /**
     * Get all player statistics.
     * @returns {Promise<Array>} A list of all player statistics.
     */
    async getAllPlayerStatistics() {
        return await PlayerStatistics.findAll();
    }

    /**
     * Update player statistics by its ID.
     * @param {number} statisticId - The ID of the player statistics.
     * @param {Object} statisticsData - The new data for the player statistics.
     * @returns {Promise<number>} The number of affected rows.
     */
    async updatePlayerStatistics(statisticId, statisticsData) {
        return await PlayerStatistics.update(statisticsData, {
            where: { statisticId }
        });
    }

    /**
     * Delete player statistics by its ID.
     * @param {number} statisticId - The ID of the player statistics.
     * @returns {Promise<number>} The number of affected rows.
     */
    async deletePlayerStatistics(statisticId) {
        return await PlayerStatistics.destroy({
            where: { statisticId }
        });
    }
}

module.exports = new PlayerStatisticsRepository();