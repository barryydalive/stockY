const db = require('../db')
const Sequelize = require('sequelize')

const Transaction = db.define('transaction', {
  pricePerShare: {
    type: Sequelize.INTEGER,
  },
  numOfShares: {
    type: Sequelize.INTEGER,
  },
})

module.exports = Transaction
