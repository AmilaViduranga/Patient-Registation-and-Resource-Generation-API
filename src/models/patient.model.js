var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

const PatientModel = new Schema({
    patientTitle: {
        type: String,
        required: true
    },
    patientFulName: {
        type: String,
        required: true
    },
    patientAddress: {
        type: String,
        required: true
    },
    patientUserName: {
        type: String,
        required: true
    },
    patientNIC: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    telephoneNumber: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    civilStatus: {
        type: String,
        required: true
    },
    preferedLanguage: {
        type: String,
        required: true,
        default: "Sinhala"
    },
    registeredDate: {
        type: Date,
        default: new Date()
    }
}, {
    timestamps: true
});

module.exports = PatientModel;