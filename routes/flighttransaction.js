var express = require('express');
var app = express();
var router = express.Router();

const ctrlFlightTransactions = require('../controllers/flighttransaction')

router.post('/flights', ctrlFlightTransactions.FlightTransactions);
router.get('/details/:transactionid', ctrlFlightTransactions.FlightTransactionByID)
router.post('/createflight', ctrlFlightTransactions.CreateFlightTransaction);


module.exports = router