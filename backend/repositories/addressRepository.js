// repositories/addressRepository.js
const Address = require('../models/Address');

/**
 * Find an address by its unique ID.
 * @param {number} addressId - The ID of the address to find.
 * @returns {Promise<Address>} - The address object if found, otherwise null.
 */
const findAddressById = async (addressId) => {
    return await Address.findByPk(addressId);
};

/**
 * Create a new address in the database.
 * @param {object} addressData - The address data to insert into the database.
 * @returns {Promise<Address>} - The newly created address object.
 */
const createAddress = async (addressData) => {
    return await Address.create(addressData);
};

/**
 * Update an existing address in the database.
 * @param {number} addressId - The ID of the address to update.
 * @param {object} addressData - The updated address data.
 * @returns {Promise<Address>} - The updated address object if found, otherwise null.
 */
const updateAddress = async (addressId, addressData) => {
    const address = await Address.findByPk(addressId);
    if (address) {
        return await address.update(addressData);
    }
    return null;
};

/**
 * Delete an address from the database.
 * @param {number} addressId - The ID of the address to delete.
 * @returns {Promise<boolean>} - True if the address was deleted, otherwise false.
 */
const deleteAddress = async (addressId) => {
    const address = await Address.findByPk(addressId);
    if (address) {
        await address.destroy();
        return true;
    }
    return false;
};

module.exports = {
    findAddressById,
    createAddress,
    updateAddress,
    deleteAddress,
};