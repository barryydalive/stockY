const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const databasename = pkg.name

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/${databasename}`, { logging: false, }
)

module.exports = db
