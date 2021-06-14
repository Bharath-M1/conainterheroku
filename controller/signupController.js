const signup = require('../model/signup')
const bcrypt = require('bcryptjs')

exports.create = (req, res) => {
  /* only hashsync create a password not hash in bcrypt */
  const hashedPass = bcrypt.hashSync(req.body.password, 8)
  signup.create(
    {
      name: req.body.name,
      mobileNo: req.body.mobileNo,
      password: hashedPass,
      email: req.body.email,
      dateOfBirth: req.body.dateOfBirth,
      gender: req.body.gender,
      address: req.body.address
    })
    .then(data => { res.send(data) })
    .catch(err => {
      res.status(500)
        .send({
          message: err.message || "Some error occurred while creating the Student."
        });
    });
}


exports.update = (req, res) => {
  console.log(req.body.id)
  signup.updateOne({ _id: req.body.id }, {
    name: req.body.name,
    mobileNo: req.body.mobileNo,
    email: req.body.email,
    dateOfBirth: req.body.dateOfBirth,
    gender: req.body.gender,
    address: req.body.address
  }).then(data => { res.send(data) })
    .catch(err => {
      res.status(500)
        .send({
          message: err.message || "Some error occurred while creating the Student."
        });
    });
}


/* exports.get = (req, res) => {
  const password = req.body.password
  signup.findOne({ number: req.body.number })
    .then((data) => {
      let result = bcrypt.compare(password, data.password)
      if (result) {
        res.send(data)
      }
    })
    .catch(err => {
      res.status(500)
        .send({
          message: err.message || "Some error occurred while creating the Student."
        });
    });


} */