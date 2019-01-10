const db = require('../database-connection')

module.exports = {
  // CITIES
  readAllCities () {
    return db('cities')
  },
  readCityById (id) {
    return db('cities').where('id', id).then(city => city[0])
  },
  addNewCity (city) {
    return db('cities').insert(city)
  },

  // LOCATIONS
  readAllLocations () {
    return db('cities').innerJoin('states', 'cities.state_id', 'states.id')
  }
}
