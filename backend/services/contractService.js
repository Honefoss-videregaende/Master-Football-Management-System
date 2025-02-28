const contractRepository = require('../repositories/contractRepository');

/**
 * Contract Service
 * Handles business logic related to the `Contract` model.
 */
class ContractService {
    /**
     * Create a new contract.
     * @param {Object} contractData - Data for the new contract.
     * @returns {Promise<Object>} The created contract.
     */
    async createContract(contractData) {
        return await contractRepository.createContract(contractData);
    }

    /**
     * Get a contract by its ID.
     * @param {number} contractId - The ID of the contract.
     * @returns {Promise<Object|null>} The contract, or null if not found.
     */
    async getContractById(contractId) {
        return await contractRepository.getContractById(contractId);
    }

    /**
     * Get all contracts.
     * @returns {Promise<Array>} A list of all contracts.
     */
    async getAllContracts() {
        return await contractRepository.getAllContracts();
    }

    /**
     * Update a contract by its ID.
     * @param {number} contractId - The ID of the contract.
     * @param {Object} contractData - The new data for the contract.
     * @returns {Promise<number>} The number of affected rows.
     */
    async updateContract(contractId, contractData) {
        return await contractRepository.updateContract(contractId, contractData);
    }

    /**
     * Delete a contract by its ID.
     * @param {number} contractId - The ID of the contract.
     * @returns {Promise<number>} The number of affected rows.
     */
    async deleteContract(contractId) {
        return await contractRepository.deleteContract(contractId);
    }
}

module.exports = new ContractService();