const express = require('express');
const currencyController = require('../controllers/currencyController');
const rateLimiter = require('../middlewares/rateLimiter'); // Ensure this path is correct

const router = express.Router();

/**
 * Currency Routes
 * Defines the routes for currency-related operations.
 */

// Route to create a new currency
router.post('/currencies', rateLimiter, currencyController.createCurrency);

// Route to get a currency by its code
router.get('/currencies/:currencyCode', rateLimiter, currencyController.getCurrencyByCode);

// Route to get all currencies
router.get('/currencies', rateLimiter, currencyController.getAllCurrencies);

// Route to update a currency by its code
router.put('/currencies/:currencyCode', rateLimiter, currencyController.updateCurrency);

// Route to delete a currency by its code
router.delete('/currencies/:currencyCode', rateLimiter, currencyController.deleteCurrency);

module.exports = router;