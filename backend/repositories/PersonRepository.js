// repositories/personRepository.js
const Person = require('../models/Person');

/**
 * Find a person by their unique ID.
 * @param {number} personId - The ID of the person to find.
 * @returns {Promise<Person>} - The person object if found, otherwise null.
 */
const findPersonById = async (personId) => {
    return await Person.findByPk(personId);
};

/**
 * Create a new person in the database.
 * @param {object} personData - The person data to insert into the database.
 * @returns {Promise<Person>} - The newly created person object.
 */
const createPerson = async (personData) => {
    return await Person.create(personData);
};

/**
 * Update an existing person in the database.
 * @param {number} personId - The ID of the person to update.
 * @param {object} personData - The updated person data.
 * @returns {Promise<Person>} - The updated person object if found, otherwise null.
 */
const updatePerson = async (personId, personData) => {
    const person = await Person.findByPk(personId);
    if (person) {
        return await person.update(personData);
    }
    return null;
};

/**
 * Delete a person from the database.
 * @param {number} personId - The ID of the person to delete.
 * @returns {Promise<boolean>} - True if the person was deleted, otherwise false.
 */
const deletePerson = async (personId) => {
    const person = await Person.findByPk(personId);
    if (person) {
        await person.destroy();
        return true;
    }
    return false;
};

module.exports = {
    findPersonById,
    createPerson,
    updatePerson,
    deletePerson,
};