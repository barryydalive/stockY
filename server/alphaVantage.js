const AlphaVantageAPI = require('../secrets').AlphaVantageAPI

const alphaVantage = require('alphavantage')

const alpha = alphaVantage({ key: AlphaVantageAPI, })
module.exports = alpha
