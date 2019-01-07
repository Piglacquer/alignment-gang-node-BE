
exports.seed = (knex, Promise) => {
  return knex('cities').del()
    .then(() => {
      return knex('cities').insert([
        { name: 'Denver' },
        { name: 'Dallas' },
        { name: 'Detroit' }
      ])
    })
}
