const addressService = require('../services/addressService');

/**
 * Address Controller
 * Handles HTTP requests related to the `Address` model.
 */
class AddressController {
    /**
     * Create a new address.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async createAddress(req, res) {
        try {
            const address = await addressService.createAddress(req.body);
            res.status(201).json(address);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get an address by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getAddressById(req, res) {
        try {
            const address = await addressService.getAddressById(req.params.addressId);
            if (address) {
                res.status(200).json(address);
            } else {
                res.status(404).json({ message: 'Address not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get all addresses.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getAllAddresses(req, res) {
        try {
            const addresses = await addressService.getAllAddresses();
            res.status(200).json(addresses);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Update an address by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async updateAddress(req, res) {
        try {
            const address = await addressService.updateAddress(req.params.addressId, req.body);
            if (address[0] > 0) {
                res.status(200).json({ message: 'Address updated successfully' });
            } else {
                res.status(404).json({ message: 'Address not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Delete an address by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async deleteAddress(req, res) {
        try {
            const result = await addressService.deleteAddress(req.params.addressId);
            if (result) {
                res.status(200).json({ message: 'Address deleted successfully' });
            } else {
                res.status(404).json({ message: 'Address not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new AddressController();