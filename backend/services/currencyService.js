const currencyRepository = require('../repositories/currencyRepository');

/**
 * Currency Service
 * Handles business logic related to the `Currency` model.
 */
class CurrencyService {
    /**
     * Create a new currency.
     * @param {Object} currencyData - Data for the new currency.
     * @returns {Promise<Object>} The created currency.
     */
    async createCurrency(currencyData) {
        return await currencyRepository.createCurrency(currencyData);
    }

    /**
     * Get a currency by its code.
     * @param {string} currencyCode - The code of the currency.
     * @returns {Promise<Object|null>} The currency, or null if not found.
     */
    async getCurrencyByCode(currencyCode) {
        return await currencyRepository.findCurrencyByCode(currencyCode);
    }

    /**
     * Update a currency by its code.
     * @param {string} currencyCode - The code of the currency.
     * @param {Object} currencyData - The new data for the currency.
     * @returns {Promise<Object>} The updated currency.
     */
    async updateCurrency(currencyCode, currencyData) {
        return await currencyRepository.updateCurrency(currencyCode, currencyData);
    }

    /**
     * Delete a currency by its code.
     * @param {string} currencyCode - The code of the currency.
     * @returns {Promise<boolean>} True if the currency was deleted, otherwise false.
     */
    async deleteCurrency(currencyCode) {
        return await currencyRepository.deleteCurrency(currencyCode);
    }
}

module.exports = new CurrencyService();