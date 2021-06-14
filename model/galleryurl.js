const mongoose = require('mongoose')

const galleryUrl = mongoose.Schema({
  url: String
})

module.exports = mongoose.model('galleryurl', galleryUrl)