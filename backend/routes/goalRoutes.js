const express = require('express');
const goalController = require('../controllers/goalController');
const rateLimiter = require('../middlewares/rateLimiter'); // Ensure this path is correct

const router = express.Router();

/**
 * Goal Routes
 * Defines the routes for goal-related operations.
 */

// Route to create a new goal
router.post('/goals', rateLimiter, goalController.createGoal);

// Route to get a goal by its ID
router.get('/goals/:goalId', rateLimiter, goalController.getGoalById);

// Route to get all goals
router.get('/goals', rateLimiter, goalController.getAllGoals);

// Route to update a goal by its ID
router.put('/goals/:goalId', rateLimiter, goalController.updateGoal);

// Route to delete a goal by its ID
router.delete('/goals/:goalId', rateLimiter, goalController.deleteGoal);

module.exports = router;