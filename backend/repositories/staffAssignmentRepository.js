const StaffAssignment = require('../models/StaffAssignment');

/**
 * StaffAssignment Repository
 * Handles database operations related to the `StaffAssignment` model.
 */
class StaffAssignmentRepository {
    /**
     * Create a new staff assignment.
     * @param {Object} assignmentData - Data for the new staff assignment.
     * @returns {Promise<Object>} The created staff assignment.
     */
    async createStaffAssignment(assignmentData) {
        return await StaffAssignment.create(assignmentData);
    }

    /**
     * Get a staff assignment by its ID.
     * @param {number} assignmentId - The ID of the staff assignment.
     * @returns {Promise<Object|null>} The staff assignment, or null if not found.
     */
    async getStaffAssignmentById(assignmentId) {
        return await StaffAssignment.findByPk(assignmentId);
    }

    /**
     * Get all staff assignments.
     * @returns {Promise<Array>} A list of all staff assignments.
     */
    async getAllStaffAssignments() {
        return await StaffAssignment.findAll();
    }

    /**
     * Update a staff assignment by its ID.
     * @param {number} assignmentId - The ID of the staff assignment.
     * @param {Object} assignmentData - The new data for the staff assignment.
     * @returns {Promise<number>} The number of affected rows.
     */
    async updateStaffAssignment(assignmentId, assignmentData) {
        return await StaffAssignment.update(assignmentData, {
            where: { assignmentId }
        });
    }

    /**
     * Delete a staff assignment by its ID.
     * @param {number} assignmentId - The ID of the staff assignment.
     * @returns {Promise<number>} The number of affected rows.
     */
    async deleteStaffAssignment(assignmentId) {
        return await StaffAssignment.destroy({
            where: { assignmentId }
        });
    }
}

module.exports = new StaffAssignmentRepository();