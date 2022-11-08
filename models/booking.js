const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    customerId: { type: String, required: true },
    flightId: { type: String, required: true },
    seats: [{ type: String, required: true }],
    rateType: { type: String, required: true },
    bookedPrice: { type: Number, required: true }
});

mongoose.model('booking', BookingSchema, 'Bookings')
