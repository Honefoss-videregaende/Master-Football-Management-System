const goalRepository = require('../repositories/goalRepository');

/**
 * Goal Service
 * Handles business logic related to the `Goal` model.
 */
class GoalService {
    /**
     * Create a new goal.
     * @param {Object} goalData - Data for the new goal.
     * @returns {Promise<Object>} The created goal.
     */
    async createGoal(goalData) {
        return await goalRepository.createGoal(goalData);
    }

    /**
     * Get a goal by its ID.
     * @param {number} goalId - The ID of the goal.
     * @returns {Promise<Object|null>} The goal, or null if not found.
     */
    async getGoalById(goalId) {
        return await goalRepository.getGoalById(goalId);
    }

    /**
     * Get all goals.
     * @returns {Promise<Array>} A list of all goals.
     */
    async getAllGoals() {
        return await goalRepository.getAllGoals();
    }

    /**
     * Update a goal by its ID.
     * @param {number} goalId - The ID of the goal.
     * @param {Object} goalData - The new data for the goal.
     * @returns {Promise<number>} The number of affected rows.
     */
    async updateGoal(goalId, goalData) {
        return await goalRepository.updateGoal(goalId, goalData);
    }

    /**
     * Delete a goal by its ID.
     * @param {number} goalId - The ID of the goal.
     * @returns {Promise<number>} The number of affected rows.
     */
    async deleteGoal(goalId) {
        return await goalRepository.deleteGoal(goalId);
    }
}

module.exports = new GoalService();