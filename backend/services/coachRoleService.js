const coachRoleRepository = require('../repositories/coachRoleRepository');

/**
 * CoachRole Service
 * Handles business logic related to the `CoachRole` model.
 */
class CoachRoleService {
    /**
     * Create a new coach role.
     * @param {Object} coachRoleData - Data for the new coach role.
     * @returns {Promise<Object>} The created coach role.
     */
    async createCoachRole(coachRoleData) {
        return await coachRoleRepository.createCoachRole(coachRoleData);
    }

    /**
     * Get a coach role by its ID.
     * @param {number} roleId - The ID of the coach role.
     * @returns {Promise<Object|null>} The coach role, or null if not found.
     */
    async getCoachRoleById(roleId) {
        return await coachRoleRepository.findCoachRoleById(roleId);
    }

    /**
     * Update a coach role by its ID.
     * @param {number} roleId - The ID of the coach role.
     * @param {Object} coachRoleData - The new data for the coach role.
     * @returns {Promise<Object>} The updated coach role.
     */
    async updateCoachRole(roleId, coachRoleData) {
        return await coachRoleRepository.updateCoachRole(roleId, coachRoleData);
    }

    /**
     * Delete a coach role by its ID.
     * @param {number} roleId - The ID of the coach role.
     * @returns {Promise<boolean>} True if the coach role was deleted, otherwise false.
     */
    async deleteCoachRole(roleId) {
        return await coachRoleRepository.deleteCoachRole(roleId);
    }
}

module.exports = new CoachRoleService();