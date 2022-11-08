var express = require('express');
var app = express();
var router = express.Router();

const ctrlCustomer = require('../controllers/customer')

router.post('/signin', ctrlCustomer.UserSignIn);
router.post('/signup', ctrlCustomer.UserSignUp);

module.exports = router