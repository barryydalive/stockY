const { AlphaVantageAPI, } = require('../secrets')

const alphaVantage = require('alphavantage')

const alpha = alphaVantage({ key: AlphaVantageAPI, })
module.exports = alpha
