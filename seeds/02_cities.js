exports.seed = (knex, Promise) => {
  return knex('cities').del()
    .then(() => {
      return knex('cities').insert([
        { name: 'Denver', city_lat: 39.7308082, city_lng: -104.969264, state_id: 6 },
        { name: 'Dallas', city_lat: 32.7659617, city_lng: -96.7690797, state_id: 42 },
        { name: 'Detroit', city_lat: 42.321032, city_lng: -83.0479041, state_id: 21 }
      ])
    })
}
