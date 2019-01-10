const express = require('express')
const router = express.Router()
const markerQueries = require('../queries/markers')
const locationQueries = require('../queries/locations')

router.get('/', (req, res, next) => {
  return markerQueries.readAllMarkers()
    .then(markers => res.status(200).send(markers))
})

router.get('/:id', (req, res, next) => {
  let markers = null
  let city = null
  return markerQueries.readMarkersByCityId(req.params.id)
    .then(data => {
      markers = data
    })
    .then(() => locationQueries.readCityById(req.params.id))
    .then(data => {
      city = data
    })
    .then(() => res.status(200).send({ city: city, markers: markers }))
})

router.post('/', (req, res, next) => {
  return markerQueries.createMarker(req.body).then((data) => res.status(200).send(data))
})

module.exports = router
