var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('./models/db');
const userRouter = require('./routes/customer')
const flightsRouter = require('./routes/flighttransaction')
const bookingRouter = require('./routes/booking')
const adminRouter = require('./routes/admin')

const app = express()
app.use(logger('dev')); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://airfarereactapp.herokuapp.com');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT');
  next();
});

app.use('/transactions', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://airfarereactapp.herokuapp.com');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT');
  next();
});

app.use('/booking', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://airfarereactapp.herokuapp.com');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT');
  next();
});

app.use('/admin', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://airfarereactapp.herokuapp.com');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT');
  next();
});

app.use('/api', userRouter);
app.use('/transactions', flightsRouter)
app.use('/booking', bookingRouter)
app.use('/admin', adminRouter)

module.exports = app;