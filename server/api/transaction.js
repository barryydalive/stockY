const Router = require('express').Router()

const { User, Transaction, Stock, UserStock, } = require('../db/models/')
module.exports = Router

Router.post('/', async (req, res, next)=> {
  const { stock: { price, symbol, }, total, quantity, } = req.body
  const [ { id, }, ] = await Stock.findOrCreate({ where: {
    symbol,
  }, }, )
  const stockId = id
  const userId = req.user.id
  const newTransaction = {
    pricePerShare: price,
    userId,
    stockId,
    numOfShares: quantity,
  }
  await Transaction.create(newTransaction)
  await User.update({ cash: req.user.cash - total, }, { where: { id: userId, }, })
  const userStock = await UserStock.findOne({ where: {
    userId,
    stockId,
  }, })
  if (userStock) {
    await UserStock.update({ quantity: userStock.quantity + quantity, }, { where: { id: userStock.id, }, })
  } else {
    await UserStock.create({ userId,
      stockId,
      quantity, })
  }
  // userStock.update({ quantity, })
  res.sendStatus(200)
})
