const Contract = require('../models/Contract');

/**
 * Contract Repository
 * Handles database operations related to the `Contract` model.
 */
class ContractRepository {
    /**
     * Create a new contract.
     * @param {Object} contractData - Data for the new contract.
     * @returns {Promise<Object>} The created contract.
     */
    async createContract(contractData) {
        return await Contract.create(contractData);
    }

    /**
     * Get a contract by its ID.
     * @param {number} contractId - The ID of the contract.
     * @returns {Promise<Object|null>} The contract, or null if not found.
     */
    async getContractById(contractId) {
        return await Contract.findByPk(contractId);
    }

    /**
     * Get all contracts.
     * @returns {Promise<Array>} A list of all contracts.
     */
    async getAllContracts() {
        return await Contract.findAll();
    }

    /**
     * Update a contract by its ID.
     * @param {number} contractId - The ID of the contract.
     * @param {Object} contractData - The new data for the contract.
     * @returns {Promise<number>} The number of affected rows.
     */
    async updateContract(contractId, contractData) {
        return await Contract.update(contractData, {
            where: { contractId }
        });
    }

    /**
     * Delete a contract by its ID.
     * @param {number} contractId - The ID of the contract.
     * @returns {Promise<number>} The number of affected rows.
     */
    async deleteContract(contractId) {
        return await Contract.destroy({
            where: { contractId }
        });
    }
}

module.exports = new ContractRepository();