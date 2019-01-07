
exports.up = (knex, Promise) => {
  return knex.schema.createTable('markers', (marker) => {
    marker.increments('id')
    marker.float('lat', 10, 7)
    marker.float('long', 10, 7)
    marker.string('address')
    marker.string('name')
    marker.integer('city_id')
    marker.foreign('city_id').references('id').inTable('cities')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('markers')
}
