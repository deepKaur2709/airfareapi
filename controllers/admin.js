const mongoose = require('mongoose');
const admin = mongoose.model('admin');


const AdminSignIn = function (req, res) {
    admin.find(req.body).exec((err, userData) => {
        if (!userData) {
            return res.status(404).json({ "message": "Logged In Successfully  !" })
        } else if (err) {
            return res.status(404).json(err)
        }
        res.status(200).json(userData[0])
    })
};

const AdminSignUp = function (req, res) {
    admin.create(req.body, (err, userdata) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(201).json(userdata);
        }
    })
};

module.exports = {
    AdminSignIn,
    AdminSignUp
}