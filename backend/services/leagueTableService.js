const leagueTableRepository = require('../repositories/leagueTableRepository');

/**
 * LeagueTable Service
 * Handles business logic related to the `LeagueTable` model.
 */
class LeagueTableService {
    /**
     * Create a new league table entry.
     * @param {Object} leagueTableData - Data for the new league table entry.
     * @returns {Promise<Object>} The created league table entry.
     */
    async createLeagueTable(leagueTableData) {
        return await leagueTableRepository.createLeagueTable(leagueTableData);
    }

    /**
     * Get a league table entry by its ID.
     * @param {number} leagueTableId - The ID of the league table entry.
     * @returns {Promise<Object|null>} The league table entry, or null if not found.
     */
    async getLeagueTableById(leagueTableId) {
        return await leagueTableRepository.getLeagueTableById(leagueTableId);
    }

    /**
     * Get all league table entries.
     * @returns {Promise<Array>} A list of all league table entries.
     */
    async getAllLeagueTables() {
        return await leagueTableRepository.getAllLeagueTables();
    }

    /**
     * Update a league table entry by its ID.
     * @param {number} leagueTableId - The ID of the league table entry.
     * @param {Object} leagueTableData - The new data for the league table entry.
     * @returns {Promise<number>} The number of affected rows.
     */
    async updateLeagueTable(leagueTableId, leagueTableData) {
        return await leagueTableRepository.updateLeagueTable(leagueTableId, leagueTableData);
    }

    /**
     * Delete a league table entry by its ID.
     * @param {number} leagueTableId - The ID of the league table entry.
     * @returns {Promise<number>} The number of affected rows.
     */
    async deleteLeagueTable(leagueTableId) {
        return await leagueTableRepository.deleteLeagueTable(leagueTableId);
    }
}

module.exports = new LeagueTableService();