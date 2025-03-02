const express = require('express');
const bookingController = require('../controllers/bookingController');
const rateLimiter = require('../middlewares/rateLimiter'); // Ensure this path is correct

const router = express.Router();

/**
 * Booking Routes
 * Defines the routes for booking-related operations.
 */

// Route to create a new booking
router.post('/bookings', rateLimiter, bookingController.createBooking);

// Route to get a booking by its ID
router.get('/bookings/:bookingId', rateLimiter, bookingController.getBookingById);

// Route to get all bookings
router.get('/bookings', rateLimiter, bookingController.getAllBookings);

// Route to update a booking by its ID
router.put('/bookings/:bookingId', rateLimiter, bookingController.updateBooking);

// Route to delete a booking by its ID
router.delete('/bookings/:bookingId', rateLimiter, bookingController.deleteBooking);

module.exports = router;