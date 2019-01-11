const express = require('express')
const router = express.Router()
const markerQueries = require('../queries/markers')
const locationQueries = require('../queries/locations')

router.get('/', (req, res, next) => {
  return markerQueries.readAllMarkers()
    .then(markers => res.status(200).send(markers))
})

router.get('/:id', (req, res, next) => {
  return Promise.all([
    markerQueries.readMarkersByCityId(req.params.id),
    locationQueries.readCityById(req.params.id)
  ])
    .then(data => {
      return { markers: data[0], city: data[1] }
    })
    .then(data => res.status(200).send(data))
})

router.post('/', (req, res, next) => {
  return markerQueries.createMarker(req.body).then((data) => res.status(200).send(data))
})

module.exports = router
