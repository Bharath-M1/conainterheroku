const signup = require('../model/signup')
require('dotenv').config()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


/* exports.create = (req, res) => {
  const encryptPass = bcrypt.hashSync(req.body.password, 8)
  login.create({ mobileNo: req.body.mobileNo, password: encryptPass })
    .then(loginData => {

      const token = jwt.sign({ mobileNo: login.mobileNo }, dbConfig.secret, { algorithm: 'HS256' }, { expiresIn: 86400 })
      res.status(200).send({ token: token, loginData })
    })
    .catch(err => { if (err) return res.status(500).send("There was a problem registering the user.") })
} */


/* login user with mobileno and password and compare password if pwd is crct retrieve data from db and create token else give error msg */
exports.get = (req, res) => {
  let password = req.body.password
  signup.findOne({ mobileNo: req.body.mobileNo })
    .then(async (data) => {
      const authUser = await bcrypt.compareSync(password, data.password)
      if (authUser) {
        const token = jwt.sign({ id: data._id }, process.env.SECRET, { algorithm: 'HS256' })
        res.header("Bearer", token);
        res.status(200).send({ token: "Bearer " + token, data: data })
      } else {
        res.status(400).send({ "message": "Not a valid user" })
      }
    })

}
