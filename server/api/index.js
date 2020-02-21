const Router = require('express').Router()
const axios = require('axios')
const polish = require('../util/polish')
const { Stock, } = require('../db/models')

Router.use('/auth', require('./auth'))
Router.use('/transaction', require('./transaction'))
Router.use('/me', require('./me'))

Router.get('/search/:search', async (req, res, next)=>{
  let { search, } = req.params
  search = search.toLowerCase()
  const stocks = await Stock.findAll()
  const matches = stocks.filter( stock =>
    JSON.stringify(stock).toLowerCase().indexOf(search) !== -1
  )

  res.send(matches)
})

Router.get('/stock/:tckr', async(req, res, next)=>{
  const { AlphaVantageAPI, } = require('../../secrets')
  try {
    const { data, } = await axios.get(`https://www.alphavantage.co/query?apikey=${AlphaVantageAPI}&function=GLOBAL_QUOTE&symbol=${req.params.tckr}` )
    const { data: cleanData, } = polish(data)
    console.log('data:', data)
    console.log('cleanData:', cleanData)
    cleanData.price = Number(cleanData.price.slice(0, cleanData.price.length - 2).split('.').join(''))
    res.send(cleanData)
  } catch (err) {
    console.log(err)
  }

})

module.exports = Router
