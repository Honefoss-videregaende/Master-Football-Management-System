const express = require('express');
const countryController = require('../controllers/countryController');
const rateLimiter = require('../middlewares/rateLimiter'); // Ensure this path is correct

const router = express.Router();

/**
 * Country Routes
 * Defines the routes for country-related operations.
 */

// Route to create a new country
router.post('/countries', rateLimiter, countryController.createCountry);

// Route to get a country by its ID
router.get('/countries/:countryId', rateLimiter, countryController.getCountryById);

// Route to get all countries
router.get('/countries', rateLimiter, countryController.getAllCountries);

// Route to update a country by its ID
router.put('/countries/:countryId', rateLimiter, countryController.updateCountry);

// Route to delete a country by its ID
router.delete('/countries/:countryId', rateLimiter, countryController.deleteCountry);

module.exports = router;