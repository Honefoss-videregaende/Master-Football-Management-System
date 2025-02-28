const express = require('express');
const contractController = require('../controllers/contractController');

const router = express.Router();

/**
 * Contract Routes
 * Defines the routes for contract-related operations.
 */

// Route to create a new contract
router.post('/contracts', contractController.createContract);

// Route to get a contract by its ID
router.get('/contracts/:contractId', contractController.getContractById);

// Route to get all contracts
router.get('/contracts', contractController.getAllContracts);

// Route to update a contract by its ID
router.put('/contracts/:contractId', contractController.updateContract);

// Route to delete a contract by its ID
router.delete('/contracts/:contractId', contractController.deleteContract);

module.exports = router;