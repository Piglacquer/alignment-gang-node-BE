module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql:///alignment-app-db'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
