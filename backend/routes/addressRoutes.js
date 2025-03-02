const express = require('express');
const addressController = require('../controllers/addressController');
const rateLimiter = require('../middlewares/rateLimiter'); // Ensure this path is correct

const router = express.Router();

/**
 * Address Routes
 * Defines the routes for address-related operations.
 */

// Route to create a new address
router.post('/addresses', rateLimiter, addressController.createAddress);

// Route to get an address by its ID
router.get('/addresses/:addressId', rateLimiter, addressController.getAddressById);

// Route to get all addresses
router.get('/addresses', rateLimiter, addressController.getAllAddresses);

// Route to update an address by its ID
router.put('/addresses/:addressId', rateLimiter, addressController.updateAddress);

// Route to delete an address by its ID
router.delete('/addresses/:addressId', rateLimiter, addressController.deleteAddress);

module.exports = router;