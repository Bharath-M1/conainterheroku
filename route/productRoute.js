const express = require('express')
const router = express.Router()
const product = require('../controller/productController')

router.route('/product').get(product.gets).post(product.create).put().delete()
router.route('/product/:productType').get().post(product.query).put().delete()
router.route('/product/:productType/:id').get(product.get).post().put().delete()


module.exports = router;