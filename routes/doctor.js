const express = require('express')
const { GetDoctorHome, GetConsultation, GetPatientDetails, AddConsultation, ShowConsultationDetails } = require('../controllers/doctor')
const router = express.Router()

router
    .route('/')
    .get(GetDoctorHome)
router
    .route('/addconsultation')
    .get(GetConsultation)
    .post(AddConsultation)
router
    .route('/viewpatient')
    .get(GetPatientDetails)
router
    .route('/viewpatient/:pid')
    .get(ShowConsultationDetails)

module.exports = router