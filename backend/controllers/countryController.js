const countryService = require('../services/countryService');

/**
 * Country Controller
 * Handles HTTP requests related to the `Country` model.
 */
class CountryController {
    /**
     * Create a new country.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async createCountry(req, res) {
        try {
            const country = await countryService.createCountry(req.body);
            res.status(201).json(country);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get a country by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getCountryById(req, res) {
        try {
            const country = await countryService.getCountryById(req.params.countryId);
            if (country) {
                res.status(200).json(country);
            } else {
                res.status(404).json({ message: 'Country not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get all countries.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getAllCountries(req, res) {
        try {
            const countries = await countryService.getAllCountries();
            res.status(200).json(countries);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Update a country by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async updateCountry(req, res) {
        try {
            const country = await countryService.updateCountry(req.params.countryId, req.body);
            if (country) {
                res.status(200).json({ message: 'Country updated successfully' });
            } else {
                res.status(404).json({ message: 'Country not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Delete a country by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async deleteCountry(req, res) {
        try {
            const result = await countryService.deleteCountry(req.params.countryId);
            if (result) {
                res.status(200).json({ message: 'Country deleted successfully' });
            } else {
                res.status(404).json({ message: 'Country not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new CountryController();