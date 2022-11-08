var express = require('express');
var app = express();
var router = express.Router();

const ctrlBooking = require('../controllers/booking')

router.post('/create', ctrlBooking.CreateBooking);
router.post('/getBookingsBasedOnFilter', ctrlBooking.GetBookingsBasedOnFilter);

module.exports = router