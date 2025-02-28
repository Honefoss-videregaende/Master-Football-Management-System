const goalService = require('../services/goalService');

/**
 * Goal Controller
 * Handles HTTP requests related to the `Goal` model.
 */
class GoalController {
    /**
     * Create a new goal.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async createGoal(req, res) {
        try {
            const goal = await goalService.createGoal(req.body);
            res.status(201).json(goal);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get a goal by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getGoalById(req, res) {
        try {
            const goal = await goalService.getGoalById(req.params.goalId);
            if (goal) {
                res.status(200).json(goal);
            } else {
                res.status(404).json({ message: 'Goal not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get all goals.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getAllGoals(req, res) {
        try {
            const goals = await goalService.getAllGoals();
            res.status(200).json(goals);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Update a goal by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async updateGoal(req, res) {
        try {
            const goal = await goalService.updateGoal(req.params.goalId, req.body);
            if (goal[0] > 0) {
                res.status(200).json({ message: 'Goal updated successfully' });
            } else {
                res.status(404).json({ message: 'Goal not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Delete a goal by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async deleteGoal(req, res) {
        try {
            const result = await goalService.deleteGoal(req.params.goalId);
            if (result) {
                res.status(200).json({ message: 'Goal deleted successfully' });
            } else {
                res.status(404).json({ message: 'Goal not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new GoalController();