exports.seed = (knex, Promise) => {
  return knex('cities').del()
    .then(() => {
      return knex('cities').insert([
        { name: 'Denver', city_lat: 39.7308082, city_lng: -104.969264 },
        { name: 'Dallas', city_lat: 32.7659617, city_lng: -96.7690797 },
        { name: 'Detroit', city_lat: 42.321032, city_lng: -83.0479041 }
      ])
    })
}
