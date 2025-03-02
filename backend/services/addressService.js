const addressRepository = require('../repositories/addressRepository');

/**
 * Address Service
 * Handles business logic related to the `Address` model.
 */
class AddressService {
    /**
     * Create a new address.
     * @param {Object} addressData - Data for the new address.
     * @returns {Promise<Object>} The created address.
     */
    async createAddress(addressData) {
        return await addressRepository.createAddress(addressData);
    }

    /**
     * Get an address by its ID.
     * @param {number} addressId - The ID of the address.
     * @returns {Promise<Object|null>} The address, or null if not found.
     */
    async getAddressById(addressId) {
        return await addressRepository.findAddressById(addressId);
    }

    /**
     * Update an address by its ID.
     * @param {number} addressId - The ID of the address.
     * @param {Object} addressData - The new data for the address.
     * @returns {Promise<Object>} The updated address.
     */
    async updateAddress(addressId, addressData) {
        return await addressRepository.updateAddress(addressId, addressData);
    }

    /**
     * Delete an address by its ID.
     * @param {number} addressId - The ID of the address.
     * @returns {Promise<boolean>} True if the address was deleted, otherwise false.
     */
    async deleteAddress(addressId) {
        return await addressRepository.deleteAddress(addressId);
    }
}

module.exports = new AddressService();