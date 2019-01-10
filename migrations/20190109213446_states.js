exports.up = (knex, Promise) => {
  return knex.schema.createTable('states', state => {
    state.increments('id')
    state.string('state_name')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTableIfExists('states')
}
