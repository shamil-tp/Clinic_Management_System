const express = require('express')
const { GetDesk, GetAddDoctor, GetAddPatient, AddDoctor, AddPatient, GetDoctor, GetPatient, Availability,} = require('../controllers/desk')
const router = express.Router()

router
    .route('/')
    .get(GetDesk)
router
    .route('/addDoctor')
    .get(GetAddDoctor)
    .post(AddDoctor)
router
    .route('/addPatient')
    .get(GetAddPatient)
    .post(AddPatient)
router
    .route('/doctors')
    .get(GetDoctor)
router
    .route('/doctor/isavailable/:drId')
    .get(Availability)
router
    .route('/patient')
    .get(GetPatient)

module.exports = router