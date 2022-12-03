var express = require('express');
var app = express();
var router = express.Router();

const ctrlBooking = require('../controllers/booking')

router.post('/create', ctrlBooking.CreateBooking);
router.post('/getBookingsBasedOnFilter', ctrlBooking.GetBookingsBasedOnFilter);
router.delete('/remove/:bookingid', ctrlBooking.DeleteBooking)
router.put('/updateseats/:bookingid', ctrlBooking.UpdateBooking)

module.exports = router