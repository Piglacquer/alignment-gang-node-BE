const express = require('express')
const router = express.Router()
const queries = require('../queries/cities')

router.get('/', (req, res, next) => {
  return queries.readAllCities()
    .then(cities => res.status(200).send(cities))
})

module.exports = router
