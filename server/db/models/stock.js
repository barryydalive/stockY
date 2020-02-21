const db = require('../db')
const Sequelize = require('sequelize')
const axios = require('axios')
const AlphaVantageAPI = process.env.AlphaVantageAPI || require('../../../secrets').AlphaVantageAPI
const Stock = db.define('stock', {
  symbol: {
    type: Sequelize.STRING,
    unique: true,
  },
  name: {
    type: Sequelize.STRING,
  },

})

Stock.beforeCreate(async (stock)=>{
  if (!stock.name) {
    const { data: { bestMatches, }, } = await axios.get(`https://www.alphavantage.co/query?apikey=${AlphaVantageAPI}&function=SYMBOL_SEARCH&keywords=${stock.symbol}` )
    stock.name = bestMatches[0]['2. name']
  }
})

module.exports = Stock
