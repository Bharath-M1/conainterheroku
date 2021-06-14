const express = require('express')
const router = express.Router()
const gallery = require('../controller/galleryUrlController')

router.route('/gallery').get(gallery.get).post(gallery.create).post().delete()


module.exports = router