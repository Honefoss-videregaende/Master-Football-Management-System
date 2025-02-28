const LeagueTable = require('../models/LeagueTable');

/**
 * LeagueTable Repository
 * Handles database operations related to the `LeagueTable` model.
 */
class LeagueTableRepository {
    /**
     * Create a new league table entry.
     * @param {Object} leagueTableData - Data for the new league table entry.
     * @returns {Promise<Object>} The created league table entry.
     */
    async createLeagueTable(leagueTableData) {
        return await LeagueTable.create(leagueTableData);
    }

    /**
     * Get a league table entry by its ID.
     * @param {number} leagueTableId - The ID of the league table entry.
     * @returns {Promise<Object|null>} The league table entry, or null if not found.
     */
    async getLeagueTableById(leagueTableId) {
        return await LeagueTable.findByPk(leagueTableId);
    }

    /**
     * Get all league table entries.
     * @returns {Promise<Array>} A list of all league table entries.
     */
    async getAllLeagueTables() {
        return await LeagueTable.findAll();
    }

    /**
     * Update a league table entry by its ID.
     * @param {number} leagueTableId - The ID of the league table entry.
     * @param {Object} leagueTableData - The new data for the league table entry.
     * @returns {Promise<number>} The number of affected rows.
     */
    async updateLeagueTable(leagueTableId, leagueTableData) {
        return await LeagueTable.update(leagueTableData, {
            where: { leagueTableId }
        });
    }

    /**
     * Delete a league table entry by its ID.
     * @param {number} leagueTableId - The ID of the league table entry.
     * @returns {Promise<number>} The number of affected rows.
     */
    async deleteLeagueTable(leagueTableId) {
        return await LeagueTable.destroy({
            where: { leagueTableId }
        });
    }
}

module.exports = new LeagueTableRepository();