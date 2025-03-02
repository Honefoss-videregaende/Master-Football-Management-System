const express = require('express');
const contractController = require('../controllers/contractController');
const rateLimiter = require('../middlewares/rateLimiter'); // Ensure this path is correct

const router = express.Router();

/**
 * Contract Routes
 * Defines the routes for contract-related operations.
 */

// Route to create a new contract
router.post('/contracts', rateLimiter, contractController.createContract);

// Route to get a contract by its ID
router.get('/contracts/:contractId', rateLimiter, contractController.getContractById);

// Route to get all contracts
router.get('/contracts', rateLimiter, contractController.getAllContracts);

// Route to update a contract by its ID
router.put('/contracts/:contractId', rateLimiter, contractController.updateContract);

// Route to delete a contract by its ID
router.delete('/contracts/:contractId', rateLimiter, contractController.deleteContract);

module.exports = router;