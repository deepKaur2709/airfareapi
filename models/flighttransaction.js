const mongoose = require('mongoose');

const Stops = new mongoose.Schema({
    airportname: { type: String, required: true },
    duration: { type: String, required: true },
    departureDateTime: { type: Date, required: true },
    arrivalDateTime: { type: Date, required: true },
    arrivalTerminal: { type: String, required: true },
    destinationTerminal: { type: String, required: true },
    flightmanufacturer: { type: String, required: true }
})

const Rates = new mongoose.Schema({
    RateType: { type: String, required: true },
    Rate: { type: String, required: true }
})

const FlightTransactionSchema = new mongoose.Schema({
    FlightName: { type: String, required: true },
    TotalDuration: { type: String, required: true },
    Origin: { type: String, required: true },
    Destination: { type: String, required: true },
    economyPrice: { type: String, required: false },
    departureDateTime: { type: Date, required: true },
    arrivalDateTime: { type: Date, required: true },
    arrivalTerminal: { type: String, required: true },
    destinationTerminal: { type: String, required: true },
    flightmanufacturer: { type: String, required: true },
    stops: [Stops],
    rates: [Rates]
});

mongoose.model('FlightTransaction', FlightTransactionSchema, 'FlightTransactions')
