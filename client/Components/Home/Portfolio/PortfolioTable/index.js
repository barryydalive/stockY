import React, { useEffect, useState, useContext, } from 'react'
import axios from 'axios'
import { UserContext, } from '../../../../Context'
import { PortfolioRow, Symbol, RowLeftSide, } from '../Portfolio.css'
const IEXAPI = process.env.IEXAPI || require('../../../../../secrets').IEXAPI

const PortfolioTable = ({ setPortfolioWorth, }) => {
  const [ stocks, setStocks, ] = useState([])
  const [ currentStockPrices, setCurrentStockPrices, ] = useState([])

  const { user: { cash, }, } = useContext(UserContext)
  useEffect(() => {
    const getMyStocks = async () => {
      const { data, } = await axios.get('/api/me/portfolio')
      setStocks(data)
    }
    getMyStocks()
  }, [ cash, ])

  useEffect(() => {
    const getCurrentPrice = async () => {
      const stocksWithCP = await Promise.all(stocks.map(async (stock) => {
        const { data: { latestPrice: currentPrice, }, } = await axios.get(`https://cloud.iexapis.com/stable/stock/${stock.stock.symbol}/quote?token=${IEXAPI}`)
        const { data: [ { open, }, ], } = await axios.get(`https://cloud.iexapis.com/stable/stock/${stock.stock.symbol}/intraday-prices?token=${IEXAPI}`)
        return {
          total: (currentPrice * stock.quantity).toFixed(2),
          currentPrice: currentPrice.toFixed(2),
          open,
        }
      }))
      setCurrentStockPrices(stocksWithCP)
      console.log('cash:', cash)
      const portFolioTotal = cash + stocksWithCP.reduce((acc, curr) => acc + Number(curr.total.toString().split('.').join('')), 0)
      setPortfolioWorth(portFolioTotal)
    }
    getCurrentPrice()
  }, [ cash, setPortfolioWorth, stocks, ])
  return (
    <div>

      {stocks.map(({ stock: { symbol, }, quantity, }, idx) =>{
        let color = 'grey'

        if (currentStockPrices[idx]) {
          const { currentPrice, open, } = currentStockPrices[idx]
          if (currentPrice > open) { color = 'green' }
          if (currentPrice < open) { color = 'red' }
        }
        return (
          <PortfolioRow key={symbol}>
            <RowLeftSide>
              <Symbol color={color}>{symbol}</Symbol> <div> - {quantity} shares</div>
            </RowLeftSide>
            {currentStockPrices[idx] && `$${currentStockPrices[idx].currentPrice * quantity}`}
          </PortfolioRow>)
      }

      )}

    </div>
  )
}

export default PortfolioTable
