var mongoose = require("../dbConnection");
var patientModel = mongoose.model("patients");

var patientController = function() {
    // register new patient
    this.registerPatient = (newPatient) => {
        return new Promise((resolve, reject) => {
            var patient = new patientModel({
                patientTitle: newPatient.patientTitle,
                patientFulName: newPatient.patientFulName,
                patientAddress: newPatient.patientAddress,
                patientUserName: newPatient.patientUserName,
                patientNIC: newPatient.patientNIC,
                dateOfBirth: newPatient.dateOfBirth,
                telephoneNumber: newPatient.telephoneNumber,
                gender: newPatient.gender,
                civilStatus: newPatient.civilStatus,
                preferedLanguage: newPatient.preferedLanguage
            })

            patient.save().then(() => {
                resolve({status: 200, message: "patient registered successfully"});
            }).catch(err => {
                reject({status: 500, message: "Error:- "+err});
            })
        })
    }

    //get all registerd patients
    this.getRegisteredPatients = () => {
        return new Promise((resolve, reject) => {
            patientModel.find().then(data => {
                resolve({status: 200, data: data});
            }).catch(err => {
                reject({status: 500, message: "Error:- " + err});
            })
        })
    }
}

module.exports = new patientController();