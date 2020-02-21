const { Stock, } = require('./models')
const TickerSymbols = require('./stockTickerSeedData')
try {
  Stock.bulkCreate(TickerSymbols).then(()=>console.log('seed data added'))

} catch (err) {
  console.log(err)
}
