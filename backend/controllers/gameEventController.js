const gameEventService = require('../services/gameEventService');

/**
 * GameEvent Controller
 * Handles HTTP requests related to the `GameEvent` model.
 */
class GameEventController {
    /**
     * Create a new game event.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async createGameEvent(req, res) {
        try {
            const gameEvent = await gameEventService.createGameEvent(req.body);
            res.status(201).json(gameEvent);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get a game event by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getGameEventById(req, res) {
        try {
            const gameEvent = await gameEventService.getGameEventById(req.params.eventId);
            if (gameEvent) {
                res.status(200).json(gameEvent);
            } else {
                res.status(404).json({ message: 'Game event not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get all game events.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getAllGameEvents(req, res) {
        try {
            const gameEvents = await gameEventService.getAllGameEvents();
            res.status(200).json(gameEvents);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Update a game event by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async updateGameEvent(req, res) {
        try {
            const gameEvent = await gameEventService.updateGameEvent(req.params.eventId, req.body);
            if (gameEvent[0] > 0) {
                res.status(200).json({ message: 'Game event updated successfully' });
            } else {
                res.status(404).json({ message: 'Game event not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Delete a game event by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async deleteGameEvent(req, res) {
        try {
            const result = await gameEventService.deleteGameEvent(req.params.eventId);
            if (result) {
                res.status(200).json({ message: 'Game event deleted successfully' });
            } else {
                res.status(404).json({ message: 'Game event not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new GameEventController();