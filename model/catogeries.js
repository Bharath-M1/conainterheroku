const mongoose = require('mongoose')

const catogeries = mongoose.Schema({
  imageUrl: String,
  imageName: String
})

module.exports = mongoose.model('catogeries', catogeries)