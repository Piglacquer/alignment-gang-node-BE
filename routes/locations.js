const express = require('express')
const router = express.Router()
const locationsQueries = require('../queries/locations')

router.get('/', (req, res, next) => {
  return locationsQueries.readAllCities()
    .then(locations => res.status(200).send(locations))
})

router.post('/newCity', (req, res, next) => {
  return locationsQueries.addNewCity(req.body)
    .then(newCity => res.status(200).send(newCity))
})

module.exports = router
