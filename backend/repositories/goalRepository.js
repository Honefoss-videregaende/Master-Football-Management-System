const Goal = require('../models/Goal');

/**
 * Goal Repository
 * Handles database operations related to the `Goal` model.
 */
class GoalRepository {
    /**
     * Create a new goal.
     * @param {Object} goalData - Data for the new goal.
     * @returns {Promise<Object>} The created goal.
     */
    async createGoal(goalData) {
        return await Goal.create(goalData);
    }

    /**
     * Get a goal by its ID.
     * @param {number} goalId - The ID of the goal.
     * @returns {Promise<Object|null>} The goal, or null if not found.
     */
    async getGoalById(goalId) {
        return await Goal.findByPk(goalId);
    }

    /**
     * Get all goals.
     * @returns {Promise<Array>} A list of all goals.
     */
    async getAllGoals() {
        return await Goal.findAll();
    }

    /**
     * Update a goal by its ID.
     * @param {number} goalId - The ID of the goal.
     * @param {Object} goalData - The new data for the goal.
     * @returns {Promise<number>} The number of affected rows.
     */
    async updateGoal(goalId, goalData) {
        return await Goal.update(goalData, {
            where: { goalId }
        });
    }

    /**
     * Delete a goal by its ID.
     * @param {number} goalId - The ID of the goal.
     * @returns {Promise<number>} The number of affected rows.
     */
    async deleteGoal(goalId) {
        return await Goal.destroy({
            where: { goalId }
        });
    }
}

module.exports = new GoalRepository();