const staffRepository = require('../repositories/staffRepository');

/**
 * Staff Service
 * Handles business logic related to the `Staff` model.
 */
class StaffService {
    /**
     * Create a new staff member.
     * @param {Object} staffData - Data for the new staff member.
     * @returns {Promise<Object>} The created staff member.
     */
    async createStaff(staffData) {
        return await staffRepository.createStaff(staffData);
    }

    /**
     * Get a staff member by their ID.
     * @param {number} staffId - The ID of the staff member.
     * @returns {Promise<Object|null>} The staff member, or null if not found.
     */
    async getStaffById(staffId) {
        return await staffRepository.getStaffById(staffId);
    }

    /**
     * Get all staff members.
     * @returns {Promise<Array>} A list of all staff members.
     */
    async getAllStaff() {
        return await staffRepository.getAllStaff();
    }

    /**
     * Update a staff member by their ID.
     * @param {number} staffId - The ID of the staff member.
     * @param {Object} staffData - The new data for the staff member.
     * @returns {Promise<number>} The number of affected rows.
     */
    async updateStaff(staffId, staffData) {
        return await staffRepository.updateStaff(staffId, staffData);
    }

    /**
     * Delete a staff member by their ID.
     * @param {number} staffId - The ID of the staff member.
     * @returns {Promise<number>} The number of affected rows.
     */
    async deleteStaff(staffId) {
        return await staffRepository.deleteStaff(staffId);
    }
}

module.exports = new StaffService();