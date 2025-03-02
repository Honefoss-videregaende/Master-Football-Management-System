const personRepository = require('../repositories/personRepository');

/**
 * Person Service
 * Handles business logic related to the `Person` model.
 */
class PersonService {
    /**
     * Create a new person.
     * @param {Object} personData - Data for the new person.
     * @returns {Promise<Object>} The created person.
     */
    async createPerson(personData) {
        return await personRepository.createPerson(personData);
    }

    /**
     * Get a person by their ID.
     * @param {number} personId - The ID of the person.
     * @returns {Promise<Object|null>} The person, or null if not found.
     */
    async getPersonById(personId) {
        return await personRepository.findPersonById(personId);
    }

    /**
     * Update a person by their ID.
     * @param {number} personId - The ID of the person.
     * @param {Object} personData - The new data for the person.
     * @returns {Promise<Object>} The updated person.
     */
    async updatePerson(personId, personData) {
        return await personRepository.updatePerson(personId, personData);
    }

    /**
     * Delete a person by their ID.
     * @param {number} personId - The ID of the person.
     * @returns {Promise<boolean>} True if the person was deleted, otherwise false.
     */
    async deletePerson(personId) {
        return await personRepository.deletePerson(personId);
    }
}

module.exports = new PersonService();