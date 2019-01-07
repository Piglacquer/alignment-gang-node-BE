exports.up = (knex, Promise) => {
  return knex.schema.createTable('cities', (city) => {
    city.increments('id')
    city.string('name')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('cities')
}
