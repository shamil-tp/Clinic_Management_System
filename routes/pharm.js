const express = require('express')
const { GetDoctorHome, PrescriptionPurchased, GetBilling, GetPayment, GetPharmHome } = require('../controllers/pharm')
const router = express.Router()

router
    .route('/')
    .get(GetPharmHome)
router
    .route('/billing')
    .get(GetBilling)
router
    .route('/payment')
    .get(GetPayment)
router
    .route('/payment/:cid')
    .get(PrescriptionPurchased)

module.exports = router