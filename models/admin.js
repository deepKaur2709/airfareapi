const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    Password: { type: String },
    Phone: { type: String, required: true, default: true },
    Email: { type: String, required: false }
});

mongoose.model('admin', AdminSchema, 'Admins')
