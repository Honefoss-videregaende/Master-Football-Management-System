const staffRoleRepository = require('../repositories/staffRoleRepository');

/**
 * StaffRole Service
 * Handles business logic related to the `StaffRole` model.
 */
class StaffRoleService {
    /**
     * Create a new staff role.
     * @param {Object} staffRoleData - Data for the new staff role.
     * @returns {Promise<Object>} The created staff role.
     */
    async createStaffRole(staffRoleData) {
        return await staffRoleRepository.createStaffRole(staffRoleData);
    }

    /**
     * Get a staff role by its ID.
     * @param {number} roleId - The ID of the staff role.
     * @returns {Promise<Object|null>} The staff role, or null if not found.
     */
    async getStaffRoleById(roleId) {
        return await staffRoleRepository.findStaffRoleById(roleId);
    }

    /**
     * Update a staff role by its ID.
     * @param {number} roleId - The ID of the staff role.
     * @param {Object} staffRoleData - The new data for the staff role.
     * @returns {Promise<Object>} The updated staff role.
     */
    async updateStaffRole(roleId, staffRoleData) {
        return await staffRoleRepository.updateStaffRole(roleId, staffRoleData);
    }

    /**
     * Delete a staff role by its ID.
     * @param {number} roleId - The ID of the staff role.
     * @returns {Promise<boolean>} True if the staff role was deleted, otherwise false.
     */
    async deleteStaffRole(roleId) {
        return await staffRoleRepository.deleteStaffRole(roleId);
    }
}

module.exports = new StaffRoleService();