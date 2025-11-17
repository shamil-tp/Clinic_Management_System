const express = require('express')
const router = express.Router()

const { getUsers, getAddUser, addUser } = require('../controllers/admin')

router
    .route('/')
    .get(getUsers)

router
    .route('/adduser')
    .get(getAddUser)
    .post(addUser)

module.exports = router