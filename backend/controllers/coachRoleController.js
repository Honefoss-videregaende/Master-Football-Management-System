const coachRoleService = require('../services/coachRoleService');

/**
 * CoachRole Controller
 * Handles HTTP requests related to the `CoachRole` model.
 */
class CoachRoleController {
    /**
     * Create a new coach role.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async createCoachRole(req, res) {
        try {
            const coachRole = await coachRoleService.createCoachRole(req.body);
            res.status(201).json(coachRole);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get a coach role by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getCoachRoleById(req, res) {
        try {
            const coachRole = await coachRoleService.getCoachRoleById(req.params.roleId);
            if (coachRole) {
                res.status(200).json(coachRole);
            } else {
                res.status(404).json({ message: 'Coach role not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get all coach roles.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getAllCoachRoles(req, res) {
        try {
            const coachRoles = await coachRoleService.getAllCoachRoles();
            res.status(200).json(coachRoles);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Update a coach role by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async updateCoachRole(req, res) {
        try {
            const coachRole = await coachRoleService.updateCoachRole(req.params.roleId, req.body);
            if (coachRole) {
                res.status(200).json({ message: 'Coach role updated successfully' });
            } else {
                res.status(404).json({ message: 'Coach role not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Delete a coach role by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async deleteCoachRole(req, res) {
        try {
            const result = await coachRoleService.deleteCoachRole(req.params.roleId);
            if (result) {
                res.status(200).json({ message: 'Coach role deleted successfully' });
            } else {
                res.status(404).json({ message: 'Coach role not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new CoachRoleController();