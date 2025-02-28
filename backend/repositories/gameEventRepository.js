const GameEvent = require('../models/GameEvent');

/**
 * GameEvent Repository
 * Handles database operations related to the `GameEvent` model.
 */
class GameEventRepository {
    /**
     * Create a new game event.
     * @param {Object} eventData - Data for the new game event.
     * @returns {Promise<Object>} The created game event.
     */
    async createGameEvent(eventData) {
        return await GameEvent.create(eventData);
    }

    /**
     * Get a game event by its ID.
     * @param {number} eventId - The ID of the game event.
     * @returns {Promise<Object|null>} The game event, or null if not found.
     */
    async getGameEventById(eventId) {
        return await GameEvent.findByPk(eventId);
    }

    /**
     * Get all game events.
     * @returns {Promise<Array>} A list of all game events.
     */
    async getAllGameEvents() {
        return await GameEvent.findAll();
    }

    /**
     * Update a game event by its ID.
     * @param {number} eventId - The ID of the game event.
     * @param {Object} eventData - The new data for the game event.
     * @returns {Promise<number>} The number of affected rows.
     */
    async updateGameEvent(eventId, eventData) {
        return await GameEvent.update(eventData, {
            where: { eventId }
        });
    }

    /**
     * Delete a game event by its ID.
     * @param {number} eventId - The ID of the game event.
     * @returns {Promise<number>} The number of affected rows.
     */
    async deleteGameEvent(eventId) {
        return await GameEvent.destroy({
            where: { eventId }
        });
    }
}

module.exports = new GameEventRepository();