const express = require('express');
const goalController = require('../controllers/goalController');

const router = express.Router();

/**
 * Goal Routes
 * Defines the routes for goal-related operations.
 */

// Route to create a new goal
router.post('/goals', goalController.createGoal);

// Route to get a goal by its ID
router.get('/goals/:goalId', goalController.getGoalById);

// Route to get all goals
router.get('/goals', goalController.getAllGoals);

// Route to update a goal by its ID
router.put('/goals/:goalId', goalController.updateGoal);

// Route to delete a goal by its ID
router.delete('/goals/:goalId', goalController.deleteGoal);

module.exports = router;