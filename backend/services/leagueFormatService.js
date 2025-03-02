const leagueFormatRepository = require('../repositories/leagueFormatRepository');

/**
 * LeagueFormat Service
 * Handles business logic related to the `LeagueFormat` model.
 */
class LeagueFormatService {
    /**
     * Create a new league format.
     * @param {Object} leagueFormatData - Data for the new league format.
     * @returns {Promise<Object>} The created league format.
     */
    async createLeagueFormat(leagueFormatData) {
        return await leagueFormatRepository.createLeagueFormat(leagueFormatData);
    }

    /**
     * Get a league format by its ID.
     * @param {number} formatId - The ID of the league format.
     * @returns {Promise<Object|null>} The league format, or null if not found.
     */
    async getLeagueFormatById(formatId) {
        return await leagueFormatRepository.findLeagueFormatById(formatId);
    }

    /**
     * Update a league format by its ID.
     * @param {number} formatId - The ID of the league format.
     * @param {Object} leagueFormatData - The new data for the league format.
     * @returns {Promise<Object>} The updated league format.
     */
    async updateLeagueFormat(formatId, leagueFormatData) {
        return await leagueFormatRepository.updateLeagueFormat(formatId, leagueFormatData);
    }

    /**
     * Delete a league format by its ID.
     * @param {number} formatId - The ID of the league format.
     * @returns {Promise<boolean>} True if the league format was deleted, otherwise false.
     */
    async deleteLeagueFormat(formatId) {
        return await leagueFormatRepository.deleteLeagueFormat(formatId);
    }
}

module.exports = new LeagueFormatService();