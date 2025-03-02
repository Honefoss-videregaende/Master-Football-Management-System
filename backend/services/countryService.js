const countryRepository = require('../repositories/countryRepository');

/**
 * Country Service
 * Handles business logic related to the `Country` model.
 */
class CountryService {
    /**
     * Create a new country.
     * @param {Object} countryData - Data for the new country.
     * @returns {Promise<Object>} The created country.
     */
    async createCountry(countryData) {
        return await countryRepository.createCountry(countryData);
    }

    /**
     * Get a country by its ID.
     * @param {number} countryId - The ID of the country.
     * @returns {Promise<Object|null>} The country, or null if not found.
     */
    async getCountryById(countryId) {
        return await countryRepository.findCountryById(countryId);
    }

    /**
     * Update a country by its ID.
     * @param {number} countryId - The ID of the country.
     * @param {Object} countryData - The new data for the country.
     * @returns {Promise<Object>} The updated country.
     */
    async updateCountry(countryId, countryData) {
        return await countryRepository.updateCountry(countryId, countryData);
    }

    /**
     * Delete a country by its ID.
     * @param {number} countryId - The ID of the country.
     * @returns {Promise<boolean>} True if the country was deleted, otherwise false.
     */
    async deleteCountry(countryId) {
        return await countryRepository.deleteCountry(countryId);
    }
}

module.exports = new CountryService();