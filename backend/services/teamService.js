const teamRepository = require('../repositories/teamRepository');

/**
 * Team Service
 * Handles business logic related to the `Team` model.
 */
class TeamService {
    /**
     * Create a new team.
     * @param {Object} teamData - Data for the new team.
     * @returns {Promise<Object>} The created team.
     */
    async createTeam(teamData) {
        return await teamRepository.createTeam(teamData);
    }

    /**
     * Get a team by its ID.
     * @param {number} teamId - The ID of the team.
     * @returns {Promise<Object|null>} The team, or null if not found.
     */
    async getTeamById(teamId) {
        return await teamRepository.getTeamById(teamId);
    }

    /**
     * Get all teams.
     * @returns {Promise<Array>} A list of all teams.
     */
    async getAllTeams() {
        return await teamRepository.getAllTeams();
    }

    /**
     * Update a team by its ID.
     * @param {number} teamId - The ID of the team.
     * @param {Object} teamData - The new data for the team.
     * @returns {Promise<number>} The number of affected rows.
     */
    async updateTeam(teamId, teamData) {
        return await teamRepository.updateTeam(teamId, teamData);
    }

    /**
     * Delete a team by its ID.
     * @param {number} teamId - The ID of the team.
     * @returns {Promise<number>} The number of affected rows.
     */
    async deleteTeam(teamId) {
        return await teamRepository.deleteTeam(teamId);
    }
}

module.exports = new TeamService();