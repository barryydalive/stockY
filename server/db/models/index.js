// use this file to export models and create relations
const Stock = require('./stock')
const User = require('./user')
const Transaction = require('./transaction')
const UserStock = require('./userStock')
Transaction.belongsTo(User)
User.hasMany(Transaction)

UserStock.belongsTo(User)
UserStock.belongsTo(Stock)
User.hasMany(UserStock,)
Transaction.belongsTo(Stock)
Stock.hasMany(Transaction)

module.exports = {
  Stock,
  User,
  Transaction,
  UserStock,
}

