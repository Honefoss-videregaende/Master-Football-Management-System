const staffService = require('../services/staffService');

/**
 * Staff Controller
 * Handles HTTP requests related to the `Staff` model.
 */
class StaffController {
    /**
     * Create a new staff member.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async createStaff(req, res) {
        try {
            const staff = await staffService.createStaff(req.body);
            res.status(201).json(staff);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get a staff member by their ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getStaffById(req, res) {
        try {
            const staff = await staffService.getStaffById(req.params.staffId);
            if (staff) {
                res.status(200).json(staff);
            } else {
                res.status(404).json({ message: 'Staff not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get all staff members.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getAllStaff(req, res) {
        try {
            const staff = await staffService.getAllStaff();
            res.status(200).json(staff);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Update a staff member by their ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async updateStaff(req, res) {
        try {
            const staff = await staffService.updateStaff(req.params.staffId, req.body);
            if (staff[0] > 0) {
                res.status(200).json({ message: 'Staff updated successfully' });
            } else {
                res.status(404).json({ message: 'Staff not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Delete a staff member by their ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async deleteStaff(req, res) {
        try {
            const result = await staffService.deleteStaff(req.params.staffId);
            if (result) {
                res.status(200).json({ message: 'Staff deleted successfully' });
            } else {
                res.status(404).json({ message: 'Staff not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new StaffController();