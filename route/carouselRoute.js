const express = require('express');
const router = express.Router()
const url = require('../controller/urlController')



router.route('/carousel').get(url.get).post(url.create).put().delete()


module.exports = router;