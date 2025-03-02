const personService = require('../services/personService');

/**
 * Person Controller
 * Handles HTTP requests related to the `Person` model.
 */
class PersonController {
    /**
     * Create a new person.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async createPerson(req, res) {
        try {
            const person = await personService.createPerson(req.body);
            res.status(201).json(person);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get a person by their ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getPersonById(req, res) {
        try {
            const person = await personService.getPersonById(req.params.personId);
            if (person) {
                res.status(200).json(person);
            } else {
                res.status(404).json({ message: 'Person not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get all persons.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getAllPersons(req, res) {
        try {
            const persons = await personService.getAllPersons();
            res.status(200).json(persons);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Update a person by their ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async updatePerson(req, res) {
        try {
            const person = await personService.updatePerson(req.params.personId, req.body);
            if (person) {
                res.status(200).json({ message: 'Person updated successfully' });
            } else {
                res.status(404).json({ message: 'Person not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Delete a person by their ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async deletePerson(req, res) {
        try {
            const result = await personService.deletePerson(req.params.personId);
            if (result) {
                res.status(200).json({ message: 'Person deleted successfully' });
            } else {
                res.status(404).json({ message: 'Person not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new PersonController();