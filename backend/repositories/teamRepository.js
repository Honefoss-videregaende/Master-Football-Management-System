const Team = require('../models/Team');

/**
 * Team Repository
 * Handles database operations related to the `Team` model.
 */
class TeamRepository {
    /**
     * Create a new team.
     * @param {Object} teamData - Data for the new team.
     * @returns {Promise<Object>} The created team.
     */
    async createTeam(teamData) {
        return await Team.create(teamData);
    }

    /**
     * Get a team by its ID.
     * @param {number} teamId - The ID of the team.
     * @returns {Promise<Object|null>} The team, or null if not found.
     */
    async getTeamById(teamId) {
        return await Team.findByPk(teamId);
    }

    /**
     * Get all teams.
     * @returns {Promise<Array>} A list of all teams.
     */
    async getAllTeams() {
        return await Team.findAll();
    }

    /**
     * Update a team by its ID.
     * @param {number} teamId - The ID of the team.
     * @param {Object} teamData - The new data for the team.
     * @returns {Promise<number>} The number of affected rows.
     */
    async updateTeam(teamId, teamData) {
        return await Team.update(teamData, {
            where: { teamId }
        });
    }

    /**
     * Delete a team by its ID.
     * @param {number} teamId - The ID of the team.
     * @returns {Promise<number>} The number of affected rows.
     */
    async deleteTeam(teamId) {
        return await Team.destroy({
            where: { teamId }
        });
    }
}

module.exports = new TeamRepository();