const express = require('express')
const router = express.Router()
const catogiries = require('../controller/catogeriesController')

router.route('/catogeires').get(catogiries.get).post(catogiries.create).put().delete()

module.exports = router;
