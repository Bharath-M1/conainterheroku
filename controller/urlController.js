const urlsdata = require('../model/url')
/* create and add new url to db */
exports.create = (req, res) => {
  urlsdata.create([{ url: req.body.url }])
    .then(data => res.send(data))
    .catch(err => {
      res.status(500)
        .send({
          message: err.message || "Some error occurred while creating the Student."
        });
    });
}
/* get data from database */
exports.get = (req, res) => {
  urlsdata.find({}, { __v: 0 })
    .then((data) => { res.send(data) })
    .catch(err => {
      res.status(500)
        .send({
          message: err.message || "Some error occurred while creating the Student."
        });
    });
}



