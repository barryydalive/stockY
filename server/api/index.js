const Router = require('express').Router()
const TickerSymbols = require('../db/stockTickerSeedData')
Router.get('/search/:search', (req, res, next)=>{
  let search = req.params.search
  search = search.toLowerCase()
  // res.setHeader('Content-Type', 'application/json')
  const g = TickerSymbols.filter( f =>
    JSON.stringify(f).toLowerCase().indexOf(search) !== -1
  )

  res.send(g)
})

module.exports = Router
