const Router = require('express').Router()
const { UserStock, Stock, } = require('../db/models')
Router.get('/portfolio', async (req, res, next)=> {
  try {
    const stocks = await UserStock.findAll({ where: { userId: req.user.id, },
      include: [ { model: Stock, }, ], })

    res.send(stocks)
  } catch (err) {
    console.log(err)
  }
})

module.exports = Router
