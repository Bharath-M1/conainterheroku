const { findOneAndReplace } = require('../model/products')
const products = require('../model/products')


exports.create = (req, res) => {
  products.create([{
    brandName: req.body.brandName,
    productName: req.body.productName,
    productDescription: req.body.productDescription,
    price: req.body.price,
    size: req.body.size,
    productDetails: req.body.productDetails,
    productImage: req.body.productImage,
    productUrl: req.body.productUrl,
    productType: req.body.productType,
    productSpecName: req.body.specName,
    productSpecDetails: req.body.specDetails,
    totalprice: req.body.totalprice,
    for: req.body.for,
    discountpercentage: req.body.discountpercentage,
    sizeandfit: req.body.sizeandfit,
    materialandcare: req.body.materialandcare
  }])
    .then(data => { res.send(data), console.log(data) })
    .catch(err => { if (err) return res.status(500).send("There was a problem creating the user.") })
}

/* need to do find by value in this api */
exports.get = (req, res) => {
  /* console.log(req.params.id) */
  console.log(req.query, "id")
  products.findById({ _id: req.params.id }, {})
    .then(data => { res.send(data)/* , console.log(data) */ })
    .catch(err => {
      if (err)
        return
      res.status(500).send("There was a problem in getting the user."
      )
    })
}

exports.gets = (req, res) => {
  let finalQuery
  const query = { ...req.query }
  const removingNames = ["sort"]
  removingNames.forEach(name => delete query[name])
  /* hear we does not give const variable not mutable */
  let stringyfiedQuery = JSON.stringify(query)
  stringyfiedQuery = stringyfiedQuery.replace(
    /*function must have retun if braces or else arrow function single line effect*/
    /\b(lt|lte|gt|gte|in)\b/g, (data) => { return `$${data}` }
  )
  console.log(stringyfiedQuery)
  finalQuery = products.find(JSON.parse(stringyfiedQuery))
  if (req.query.sort) {
    const sortArray = req.query.sort.split(",")
    console.log(sortArray)
    const sortString = sortArray.join(" ")
    console.log(sortString)
    finalQuery = finalQuery.sort(sortString)

  } else {
    finalQuery = finalQuery.sort("price")

  }
  finalQuery
    .then(data => { res.send(data), console.log(data) })
    .catch(err => {
      if (err)
        return
      res.status(500).send("There was a problem in getting the user."
      )
    })
}

exports.query = (req, res) => {
  console.log(req.query, "type")
  /*  console.log(req.params.productType, JSON.parse(req.params.productType)) */
  /* console.log(req.params.productType) */
  products.find({ productType: req.params.productType })
    /* JSON.parse(req.params.productType) */
    .then(data => { res.send(data)/* , console.log(data)  */ })
    .catch(err => {
      if (err)
        return
      res.status(500).send("There was a problem in getting the user."
      )
    })
}

/* filter needs to add in this controller */
exports.filter = (req, res) => {
  console.log(req.query, "filter")
  products.find()
    .then(data => { res.send(data) })
    .catch(err => {
      if (err)
        return
      res.status(500).send("There was a problem in getting the user."
      )
    })
}
