const catogeries = require('../model/catogeries')

exports.create = (req, res) => {
  catogeries.create(
    {
      imageUrl: req.body.imageUrl,
      imageName: req.body.imageName
    })
    .then(data => { res.send(data) })
    .catch(err => { if (err) return res.status(500).send("There was a problem creating the catogeries.") })
}

exports.get = (req, res) => {
  catogeries.find({}, { __v: 0 })
    .then(data => {
      res.send(data)
    })
    .catch(err => { if (err) return res.status(500).send("There was a problem creating the user.") })
}