var express = require('express');
var app = express();
var router = express.Router();

const ctrlAdmin = require('../controllers/admin')

router.post('/signin', ctrlAdmin.AdminSignIn);
router.post('/signup', ctrlAdmin.AdminSignUp);

module.exports = router