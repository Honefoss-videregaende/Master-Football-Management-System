const express = require('express');
const bookingController = require('../controllers/bookingController');

const router = express.Router();

/**
 * Booking Routes
 * Defines the routes for booking-related operations.
 */

// Route to create a new booking
router.post('/bookings', bookingController.createBooking);

// Route to get a booking by its ID
router.get('/bookings/:bookingId', bookingController.getBookingById);

// Route to get all bookings
router.get('/bookings', bookingController.getAllBookings);

// Route to update a booking by its ID
router.put('/bookings/:bookingId', bookingController.updateBooking);

// Route to delete a booking by its ID
router.delete('/bookings/:bookingId', bookingController.deleteBooking);

module.exports = router;