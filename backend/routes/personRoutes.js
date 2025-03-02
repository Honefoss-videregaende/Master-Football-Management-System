const express = require('express');
const personController = require('../controllers/personController');
const rateLimiter = require('../middlewares/rateLimiter'); // Ensure this path is correct

const router = express.Router();

/**
 * Person Routes
 * Defines the routes for person-related operations.
 */

// Route to create a new person
router.post('/persons', rateLimiter, personController.createPerson);

// Route to get a person by their ID
router.get('/persons/:personId', rateLimiter, personController.getPersonById);

// Route to get all persons
router.get('/persons', rateLimiter, personController.getAllPersons);

// Route to update a person by their ID
router.put('/persons/:personId', rateLimiter, personController.updatePerson);

// Route to delete a person by their ID
router.delete('/persons/:personId', rateLimiter, personController.deletePerson);

module.exports = router;