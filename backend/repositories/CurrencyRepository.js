// repositories/currencyRepository.js
const Currency = require('../models/Currency');

/**
 * Find a currency by its unique code.
 * @param {string} currencyCode - The code of the currency to find.
 * @returns {Promise<Currency>} - The currency object if found, otherwise null.
 */
const findCurrencyByCode = async (currencyCode) => {
    return await Currency.findByPk(currencyCode);
};

/**
 * Create a new currency in the database.
 * @param {object} currencyData - The currency data to insert into the database.
 * @returns {Promise<Currency>} - The newly created currency object.
 */
const createCurrency = async (currencyData) => {
    return await Currency.create(currencyData);
};

/**
 * Update an existing currency in the database.
 * @param {string} currencyCode - The code of the currency to update.
 * @param {object} currencyData - The updated currency data.
 * @returns {Promise<Currency>} - The updated currency object if found, otherwise null.
 */
const updateCurrency = async (currencyCode, currencyData) => {
    const currency = await Currency.findByPk(currencyCode);
    if (currency) {
        return await currency.update(currencyData);
    }
    return null;
};

/**
 * Delete a currency from the database.
 * @param {string} currencyCode - The code of the currency to delete.
 * @returns {Promise<boolean>} - True if the currency was deleted, otherwise false.
 */
const deleteCurrency = async (currencyCode) => {
    const currency = await Currency.findByPk(currencyCode);
    if (currency) {
        await currency.destroy();
        return true;
    }
    return false;
};

module.exports = {
    findCurrencyByCode,
    createCurrency,
    updateCurrency,
    deleteCurrency,
};