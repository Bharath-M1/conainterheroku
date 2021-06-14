const mongoose = require('mongoose')


const productSchema = mongoose.Schema({
  brandName: String,
  productName: String,
  productDescription: String,
  price: Number,
  size: Array,
  productDetails: String,
  productImage: Array,
  productUrl: String,
  productType: String,
  productSpecName: Array,
  productSpecDetails: Array,
  totalprice: String,
  for: String,
  discountpercentage: String,
  sizeandfit:String,
  materialandcare:String
})

module.exports = mongoose.model('product', productSchema);