const express = require('express')
const { GetDoctorHome } = require('../controllers/doctor')
const router = express.Router()

router
    .route('/')
    .get(GetDoctorHome)

module.exports = router