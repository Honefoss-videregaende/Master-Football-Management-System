const staffAssignmentService = require('../services/staffAssignmentService');

/**
 * StaffAssignment Controller
 * Handles HTTP requests related to the `StaffAssignment` model.
 */
class StaffAssignmentController {
    /**
     * Create a new staff assignment.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async createStaffAssignment(req, res) {
        try {
            const assignment = await staffAssignmentService.createStaffAssignment(req.body);
            res.status(201).json(assignment);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get a staff assignment by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getStaffAssignmentById(req, res) {
        try {
            const assignment = await staffAssignmentService.getStaffAssignmentById(req.params.assignmentId);
            if (assignment) {
                res.status(200).json(assignment);
            } else {
                res.status(404).json({ message: 'Staff assignment not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get all staff assignments.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getAllStaffAssignments(req, res) {
        try {
            const assignments = await staffAssignmentService.getAllStaffAssignments();
            res.status(200).json(assignments);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Update a staff assignment by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async updateStaffAssignment(req, res) {
        try {
            const assignment = await staffAssignmentService.updateStaffAssignment(req.params.assignmentId, req.body);
            if (assignment[0] > 0) {
                res.status(200).json({ message: 'Staff assignment updated successfully' });
            } else {
                res.status(404).json({ message: 'Staff assignment not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Delete a staff assignment by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async deleteStaffAssignment(req, res) {
        try {
            const result = await staffAssignmentService.deleteStaffAssignment(req.params.assignmentId);
            if (result) {
                res.status(200).json({ message: 'Staff assignment deleted successfully' });
            } else {
                res.status(404).json({ message: 'Staff assignment not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new StaffAssignmentController();