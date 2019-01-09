const express = require('express')
const router = express.Router()
const markerQueries = require('../queries/markers')
const cityQueries = require('../queries/cities')

router.get('/', (req, res, next) => {
  return markerQueries.readAllMarkers()
    .then(markers => res.status(200).send(markers))
})

router.get('/:id', (req, res, next) => {
  let markers = null
  let city = null
  markerQueries.readMarkersByCityId(req.params.id)
    .then(data => {
      markers = data
    })
    .then(() => cityQueries.readCityById(req.params.id))
    .then(data => {
      city = data
    })
    .then(() => res.status(200).send({ city: city, markers: markers }))
})

module.exports = router
