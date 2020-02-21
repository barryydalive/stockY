const Sequelize = require('sequelize')
const db = require('../db')

const UserStock = db.define('userStock', {
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
})

module.exports = UserStock
