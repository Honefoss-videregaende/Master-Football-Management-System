const contractService = require('../services/contractService');

/**
 * Contract Controller
 * Handles HTTP requests related to the `Contract` model.
 */
class ContractController {
    /**
     * Create a new contract.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async createContract(req, res) {
        try {
            const contract = await contractService.createContract(req.body);
            res.status(201).json(contract);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get a contract by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getContractById(req, res) {
        try {
            const contract = await contractService.getContractById(req.params.contractId);
            if (contract) {
                res.status(200).json(contract);
            } else {
                res.status(404).json({ message: 'Contract not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get all contracts.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getAllContracts(req, res) {
        try {
            const contracts = await contractService.getAllContracts();
            res.status(200).json(contracts);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Update a contract by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async updateContract(req, res) {
        try {
            const contract = await contractService.updateContract(req.params.contractId, req.body);
            if (contract[0] > 0) {
                res.status(200).json({ message: 'Contract updated successfully' });
            } else {
                res.status(404).json({ message: 'Contract not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Delete a contract by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async deleteContract(req, res) {
        try {
            const result = await contractService.deleteContract(req.params.contractId);
            if (result) {
                res.status(200).json({ message: 'Contract deleted successfully' });
            } else {
                res.status(404).json({ message: 'Contract not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new ContractController();