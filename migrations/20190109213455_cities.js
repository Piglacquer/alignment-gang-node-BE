exports.up = (knex, Promise) => {
  return knex.schema.createTable('cities', (city) => {
    city.increments('id')
    city.string('name')
    city.integer('state_id')
    city.foreign('state_id').references('id').inTable('states')
    city.float('city_lat', 10, 7)
    city.float('city_lng', 10, 7)
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('cities')
}
