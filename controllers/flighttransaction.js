const mongoose = require('mongoose');
const flighttransactions = mongoose.model('FlightTransaction');

const FlightTransactions = function (req, res) {
    if (req.body.filtercriteria) {
        const fltransactions = flighttransactions.find(req.body.filtercriteria)
            .then(flightdetails => {
                return res.status(200).json(flightdetails)
            })
            .catch(error => {
                res.json(error)
            })
        return res.status(200).json(fltransactions)
    } else {
        const fltransactions = flighttransactions.find({})
            .then(flightdetails => {
                return res.status(200).json(flightdetails)
            })
            .catch(error => {
                res.json(error)
            })
    }
};

const FlightTransactionByID = function (req, res) {
    flighttransactions.findById(req.params.transactionid)
        .then(flightdetails => {
            return res.status(200).json(flightdetails)
        })
        .catch(error => {
            res.json(error)
        })
};

module.exports = {
    FlightTransactions,
    FlightTransactionByID
}