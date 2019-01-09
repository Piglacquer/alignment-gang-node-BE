const db = require('../database-connection')

module.exports = {
  readAllMarkers () {
    return db('markers')
  },
  readMarkersByCityId (id) {
    return db('markers').where('city_id', id)
  }
}
