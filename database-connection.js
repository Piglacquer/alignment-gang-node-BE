const environment = process.env.NODE_ENV || 'development'
const configuredEnvironment = require('knexfile')[environment]
const knex = require('knex')
const db = knex(configuredEnvironment)

module.exports = db
