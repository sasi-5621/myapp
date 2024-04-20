const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    docid: String,
    name: String,
    password: String,
    age: Number,
    gender: String,
    bloodgroup: String,
    mobilenumber: String,
    email: String,
    address: String,
    degree: String,
    workexperience: Number,
    department: String,
});

const AdminDoctor = mongoose.model('AdminDoctor', doctorSchema);

module.exports = AdminDoctor;

