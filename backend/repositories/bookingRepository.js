const Booking = require('../models/Booking');

/**
 * Booking Repository
 * Handles database operations related to the `Booking` model.
 */
class BookingRepository {
    /**
     * Create a new booking.
     * @param {Object} bookingData - Data for the new booking.
     * @returns {Promise<Object>} The created booking.
     */
    async createBooking(bookingData) {
        return await Booking.create(bookingData);
    }

    /**
     * Get a booking by its ID.
     * @param {number} bookingId - The ID of the booking.
     * @returns {Promise<Object|null>} The booking, or null if not found.
     */
    async getBookingById(bookingId) {
        return await Booking.findByPk(bookingId);
    }

    /**
     * Get all bookings.
     * @returns {Promise<Array>} A list of all bookings.
     */
    async getAllBookings() {
        return await Booking.findAll();
    }

    /**
     * Update a booking by its ID.
     * @param {number} bookingId - The ID of the booking.
     * @param {Object} bookingData - The new data for the booking.
     * @returns {Promise<number>} The number of affected rows.
     */
    async updateBooking(bookingId, bookingData) {
        return await Booking.update(bookingData, {
            where: { bookingId }
        });
    }

    /**
     * Delete a booking by its ID.
     * @param {number} bookingId - The ID of the booking.
     * @returns {Promise<number>} The number of affected rows.
     */
    async deleteBooking(bookingId) {
        return await Booking.destroy({
            where: { bookingId }
        });
    }
}

module.exports = new BookingRepository();