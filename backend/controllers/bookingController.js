const bookingService = require('../services/bookingService');

/**
 * Booking Controller
 * Handles HTTP requests related to the `Booking` model.
 */
class BookingController {
    /**
     * Create a new booking.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async createBooking(req, res) {
        try {
            const booking = await bookingService.createBooking(req.body);
            res.status(201).json(booking);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get a booking by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getBookingById(req, res) {
        try {
            const booking = await bookingService.getBookingById(req.params.bookingId);
            if (booking) {
                res.status(200).json(booking);
            } else {
                res.status(404).json({ message: 'Booking not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Get all bookings.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async getAllBookings(req, res) {
        try {
            const bookings = await bookingService.getAllBookings();
            res.status(200).json(bookings);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Update a booking by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async updateBooking(req, res) {
        try {
            const booking = await bookingService.updateBooking(req.params.bookingId, req.body);
            if (booking[0] > 0) {
                res.status(200).json({ message: 'Booking updated successfully' });
            } else {
                res.status(404).json({ message: 'Booking not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    /**
     * Delete a booking by its ID.
     * @param {Object} req - The request object.
     * @param {Object} res - The response object.
     */
    async deleteBooking(req, res) {
        try {
            const result = await bookingService.deleteBooking(req.params.bookingId);
            if (result) {
                res.status(200).json({ message: 'Booking deleted successfully' });
            } else {
                res.status(404).json({ message: 'Booking not found' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new BookingController();