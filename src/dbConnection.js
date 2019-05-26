var mongoose        = require('mongoose');
var patientModel = require("./models/patient.model");

mongoose.model("patients", patientModel);

mongoose.connect('mongodb://localhost:27017/kdu_new', (err) => {
    if (err) {
        ErrorLog.error("Error:- " + err);
    }
});

module.exports = mongoose;