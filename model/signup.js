const mongoose = require('mongoose')

const signupSchema = mongoose.Schema({
  name: String,
  email: String,
  mobileNo: Number,
  password: String,
  address: Object,
  dateOfBirth: Date,
  gender: String
})

module.exports = mongoose.model('signup', signupSchema);