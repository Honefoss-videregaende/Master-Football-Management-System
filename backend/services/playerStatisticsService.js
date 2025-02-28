const playerStatisticsRepository = require('../repositories/playerStatisticsRepository');

/**
 * PlayerStatistics Service
 * Handles business logic related to the `PlayerStatistics` model.
 */
class PlayerStatisticsService {
    /**
     * Create new player statistics.
     * @param {Object} statisticsData - Data for the new player statistics.
     * @returns {Promise<Object>} The created player statistics.
     */
    async createPlayerStatistics(statisticsData) {
        return await playerStatisticsRepository.createPlayerStatistics(statisticsData);
    }

    /**
     * Get player statistics by its ID.
     * @param {number} statisticId - The ID of the player statistics.
     * @returns {Promise<Object|null>} The player statistics, or null if not found.
     */
    async getPlayerStatisticsById(statisticId) {
        return await playerStatisticsRepository.getPlayerStatisticsById(statisticId);
    }

    /**
     * Get all player statistics.
     * @returns {Promise<Array>} A list of all player statistics.
     */
    async getAllPlayerStatistics() {
        return await playerStatisticsRepository.getAllPlayerStatistics();
    }

    /**
     * Update player statistics by its ID.
     * @param {number} statisticId - The ID of the player statistics.
     * @param {Object} statisticsData - The new data for the player statistics.
     * @returns {Promise<number>} The number of affected rows.
     */
    async updatePlayerStatistics(statisticId, statisticsData) {
        return await playerStatisticsRepository.updatePlayerStatistics(statisticId, statisticsData);
    }

    /**
     * Delete player statistics by its ID.
     * @param {number} statisticId - The ID of the player statistics.
     * @returns {Promise<number>} The number of affected rows.
     */
    async deletePlayerStatistics(statisticId) {
        return await playerStatisticsRepository.deletePlayerStatistics(statisticId);
    }
}

module.exports = new PlayerStatisticsService();