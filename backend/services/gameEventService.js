const gameEventRepository = require('../repositories/gameEventRepository');

/**
 * GameEvent Service
 * Handles business logic related to the `GameEvent` model.
 */
class GameEventService {
    /**
     * Create a new game event.
     * @param {Object} eventData - Data for the new game event.
     * @returns {Promise<Object>} The created game event.
     */
    async createGameEvent(eventData) {
        return await gameEventRepository.createGameEvent(eventData);
    }

    /**
     * Get a game event by its ID.
     * @param {number} eventId - The ID of the game event.
     * @returns {Promise<Object|null>} The game event, or null if not found.
     */
    async getGameEventById(eventId) {
        return await gameEventRepository.getGameEventById(eventId);
    }

    /**
     * Get all game events.
     * @returns {Promise<Array>} A list of all game events.
     */
    async getAllGameEvents() {
        return await gameEventRepository.getAllGameEvents();
    }

    /**
     * Update a game event by its ID.
     * @param {number} eventId - The ID of the game event.
     * @param {Object} eventData - The new data for the game event.
     * @returns {Promise<number>} The number of affected rows.
     */
    async updateGameEvent(eventId, eventData) {
        return await gameEventRepository.updateGameEvent(eventId, eventData);
    }

    /**
     * Delete a game event by its ID.
     * @param {number} eventId - The ID of the game event.
     * @returns {Promise<number>} The number of affected rows.
     */
    async deleteGameEvent(eventId) {
        return await gameEventRepository.deleteGameEvent(eventId);
    }
}

module.exports = new GameEventService();