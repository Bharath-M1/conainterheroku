const mongoose = require('mongoose')

const loginSchema = new mongoose.Schema({
  mobileNo: Number,
  password: String
})

module.exports = mongoose.model('login', loginSchema);