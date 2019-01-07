
exports.seed = (knex, Promise) => {
  return knex('markers').del()
    .then(() => {
      return knex('markers').insert([
        { lat: 39.7695543, long: -105.0031135, address: '3801 Kalamath St, Denver, CO 80211', name: 'Alignment Specialists', city_id: 1 }
      ])
    })
}
