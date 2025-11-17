const express = require('express')
const router = express.Router()

const { loginPage, login, logout } = require('../controllers/auth')


router
    .route('/login')
    .get(loginPage)
    .post(login)

router
    .route('/logout')
    .get(logout)

module.exports = router