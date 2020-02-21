const Router = require('express').Router()
const { User, Transaction, Stock, UserStock, } = require('../db/models/')

module.exports = Router

Router.get('/', async (req, res, next) => {
  const transactions = await Transaction.findAll({
    where: { userId: req.user.id, },
    include: [ { model: Stock, }, ],
  })
  res.send(transactions)
})

Router.post('/', async (req, res, next)=> {
  const { stock: { price, symbol, }, total, quantity, } = req.body

  // get stockId from db
  const [ { id: stockId, }, ] = await Stock.findOrCreate({ where: {
    symbol,
  }, }, )
  const userId = req.user.id
  const newTransaction = {
    userId,
    stockId,
    pricePerShare: price,
    numOfShares: quantity,
  }
  // create Transaction
  await Transaction.create(newTransaction)
  // update User's cash amount
  await User.update({ cash: req.user.cash - total, }, { where: { id: userId, }, })

  // update User's stock portfolio
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

  res.sendStatus(200)
})
