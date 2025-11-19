const express = require('express')
const { PrescriptionPurchased, GetBilling, GetPayment, GetPharmHome, Billing, AmountReset } = require('../controllers/pharm')
const router = express.Router()

router
    .route('/')
    .get(GetPharmHome)
router
    .route('/billing')
    .get(GetBilling)
    .post(Billing)
router
    .route('/payment')
    .get(GetPayment)
router
    .route('/payment/:cid')
    .get(PrescriptionPurchased)
router
    .route('/payment/reset/:cid')
    .get(AmountReset)

module.exports = router