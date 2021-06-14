const express = require('express')
const router = express.Router();
const login = require('../controller/loginController')

router.route('/login').get().post(login.get).put().delete()


module.exports = router;