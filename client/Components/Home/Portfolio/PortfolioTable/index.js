import React, { useEffect, useState, useContext, } from 'react'
import axios from 'axios'
import { UserContext, } from '../../../../Context'
const IEXAPI = process.env.IEXAPI || require('../../../../../secrets').IEXAPI

const PortfolioTable = () => {
  const [ stocks, setStocks, ] = useState([])
  const [ currentStockPrices, setCurrentStockPrices, ] = useState([])

  const { user: { cash, }, } = useContext(UserContext)
  useEffect(()=> {
    const getMyStocks = async()=> {
      const { data, } = await axios.get('/api/me/portfolio')
      console.log('data:', data)

      setStocks(data)
    }
    getMyStocks()
  }, [ cash, ])

  useEffect(()=> {
    const getCurrentPrice = async() => {
      const stocksWithCP = await Promise.all(stocks.map(async (stock) => {
        const { data: { latestPrice: currentPrice, }, } = await axios.get(`https://cloud.iexapis.com/stable/stock/${stock.stock.symbol}/quote?token=${IEXAPI}`)
        return currentPrice.toFixed(2)
      }))
      console.log('stocksWithCP:', stocksWithCP)
      setCurrentStockPrices(stocksWithCP)
    }
    getCurrentPrice()
  }, [ cash, stocks, ])
  return (
    <table>
      <tbody>
        {stocks.map(({ stock, quantity, }, idx) =>
          <tr>
            <td>{quantity} shares of {stock.name} @ {currentStockPrices[idx]} each</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default PortfolioTable
