const Staff = require('../models/Staff');

/**
 * Staff Repository
 * Handles database operations related to the `Staff` model.
 */
class StaffRepository {
    /**
     * Create a new staff member.
     * @param {Object} staffData - Data for the new staff member.
     * @returns {Promise<Object>} The created staff member.
     */
    async createStaff(staffData) {
        return await Staff.create(staffData);
    }

    /**
     * Get a staff member by their ID.
     * @param {number} staffId - The ID of the staff member.
     * @returns {Promise<Object|null>} The staff member, or null if not found.
     */
    async getStaffById(staffId) {
        return await Staff.findByPk(staffId);
    }

    /**
     * Get all staff members.
     * @returns {Promise<Array>} A list of all staff members.
     */
    async getAllStaff() {
        return await Staff.findAll();
    }

    /**
     * Update a staff member by their ID.
     * @param {number} staffId - The ID of the staff member.
     * @param {Object} staffData - The new data for the staff member.
     * @returns {Promise<number>} The number of affected rows.
     */
    async updateStaff(staffId, staffData) {
        return await Staff.update(staffData, {
            where: { staffId }
        });
    }

    /**
     * Delete a staff member by their ID.
     * @param {number} staffId - The ID of the staff member.
     * @returns {Promise<number>} The number of affected rows.
     */
    async deleteStaff(staffId) {
        return await Staff.destroy({
            where: { staffId }
        });
    }
}

module.exports = new StaffRepository();