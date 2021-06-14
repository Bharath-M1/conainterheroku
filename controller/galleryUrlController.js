const galleryUrl = require('../model/galleryurl')

exports.create = (req, res) => {
  galleryUrl.create({
    url: req.body.url
  })
    .then(data => { res.send(data) })
    .catch(err => { if (err) return res.status(500).send("There was a problem creating the user.") })
}

exports.get = (req, res) => {
  galleryUrl.find({}, { __v: 0 })
    .then(data => {
      res.send(data)
    })
    .catch(err => { if (err) return res.status(500).send("There was a problem creating the user.") })
}