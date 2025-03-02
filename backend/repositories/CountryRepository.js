// repositories/countryRepository.js
const Country = require('../models/Country');

/**
 * Find a country by its unique ID.
 * @param {number} countryId - The ID of the country to find.
 * @returns {Promise<Country>} - The country object if found, otherwise null.
 */
const findCountryById = async (countryId) => {
    return await Country.findByPk(countryId);
};

/**
 * Create a new country in the database.
 * @param {object} countryData - The country data to insert into the database.
 * @returns {Promise<Country>} - The newly created country object.
 */
const createCountry = async (countryData) => {
    return await Country.create(countryData);
};

/**
 * Update an existing country in the database.
 * @param {number} countryId - The ID of the country to update.
 * @param {object} countryData - The updated country data.
 * @returns {Promise<Country>} - The updated country object if found, otherwise null.
 */
const updateCountry = async (countryId, countryData) => {
    const country = await Country.findByPk(countryId);
    if (country) {
        return await country.update(countryData);
    }
    return null;
};

/**
 * Delete a country from the database.
 * @param {number} countryId - The ID of the country to delete.
 * @returns {Promise<boolean>} - True if the country was deleted, otherwise false.
 */
const deleteCountry = async (countryId) => {
    const country = await Country.findByPk(countryId);
    if (country) {
        await country.destroy();
        return true;
    }
    return false;
};

module.exports = {
    findCountryById,
    createCountry,
    updateCountry,
    deleteCountry,
};