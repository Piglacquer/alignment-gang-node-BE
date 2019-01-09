const db = require('../database-connection')

module.exports = {
  readAllCities () {
    return db('cities')
  },
  readCityById (id) {
    return db('cities').where('id', id).then(city => city[0])
  }
}
