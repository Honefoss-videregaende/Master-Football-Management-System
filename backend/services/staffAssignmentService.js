const staffAssignmentRepository = require('../repositories/staffAssignmentRepository');

/**
 * StaffAssignment Service
 * Handles business logic related to the `StaffAssignment` model.
 */
class StaffAssignmentService {
    /**
     * Create a new staff assignment.
     * @param {Object} assignmentData - Data for the new staff assignment.
     * @returns {Promise<Object>} The created staff assignment.
     */
    async createStaffAssignment(assignmentData) {
        return await staffAssignmentRepository.createStaffAssignment(assignmentData);
    }

    /**
     * Get a staff assignment by its ID.
     * @param {number} assignmentId - The ID of the staff assignment.
     * @returns {Promise<Object|null>} The staff assignment, or null if not found.
     */
    async getStaffAssignmentById(assignmentId) {
        return await staffAssignmentRepository.getStaffAssignmentById(assignmentId);
    }

    /**
     * Get all staff assignments.
     * @returns {Promise<Array>} A list of all staff assignments.
     */
    async getAllStaffAssignments() {
        return await staffAssignmentRepository.getAllStaffAssignments();
    }

    /**
     * Update a staff assignment by its ID.
     * @param {number} assignmentId - The ID of the staff assignment.
     * @param {Object} assignmentData - The new data for the staff assignment.
     * @returns {Promise<number>} The number of affected rows.
     */
    async updateStaffAssignment(assignmentId, assignmentData) {
        return await staffAssignmentRepository.updateStaffAssignment(assignmentId, assignmentData);
    }

    /**
     * Delete a staff assignment by its ID.
     * @param {number} assignmentId - The ID of the staff assignment.
     * @returns {Promise<number>} The number of affected rows.
     */
    async deleteStaffAssignment(assignmentId) {
        return await staffAssignmentRepository.deleteStaffAssignment(assignmentId);
    }
}

module.exports = new StaffAssignmentService();