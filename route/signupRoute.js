const express = require('express')
const router = express.Router()
const signup = require('../controller/signupController')

router.route('/signup').get().post(signup.create).put(signup.update).delete()

module.exports = router