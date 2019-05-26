var express     = require('express');
var router      = express.Router();
var patientController = require("./controllers/patient.controller");

// new patient registration
router.post('/patients', (req, res) => {
    patientController.registerPatient(req.body).then(data => {
        res.status(data.status).send({message: data.message});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    })
});

// get all patients registered
router.get('/patients', (req, res) => {
    patientController.getRegisteredPatients().then(data => {
        res.status(data.status).send({data: data.data});
    }).catch(err => {
        res.status(err.status).send({message: err.message});
    });
});

module.exports = router;

