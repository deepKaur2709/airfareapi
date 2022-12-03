const mongoose = require('mongoose');
const booking = mongoose.model('booking');

const CreateBooking = function (req, res) {
    booking.create(req.body, (err, bookingData) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(200).json(bookingData);
        }
    })
};

const GetBookingsBasedOnFilter = function (req, res) {
    booking.find(req.body).exec((err, BookingData) => {
        if (!BookingData) {
            return res.status(404).json({ "message": "Booking Not Found  !" })
        } else if (err) {
            return res.status(404).json(err)
        }
        res.status(200).json(BookingData)
    })
};

const DeleteBooking = function (req, res) {
    const deleteresponse = booking.deleteOne({ _id: req.params.bookingid }).then((result) => {
        return result
    })
    return res.status(200).json(deleteresponse)
}

const UpdateBooking = function (req, res) {
    const updatedBooking = booking.findOneAndUpdate({ _id: req.params.bookingid }, req.body).then(resultbooking => { return resultbooking; })
    return res.status(200).json(updatedBooking)
}

module.exports = {
    CreateBooking,
    GetBookingsBasedOnFilter,
    DeleteBooking,
    UpdateBooking
}