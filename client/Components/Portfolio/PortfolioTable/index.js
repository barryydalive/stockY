import React, { useEffect, useState, useContext, } from 'react'
import axios from 'axios'
import { UserContext, } from '../../../../Context'

const PortfolioTable = () => {
  const [ stocks, setStocks, ] = useState([])
  const { user: { cash, }, } = useContext(UserContext)
  useEffect(()=> {
    const getMyStocks = async()=> {
      let { data, } = await axios.get('/api/me/portfolio')
      data = await Promise.all(data.map(async (stock) => {
        const { data: { latestPrice: currentPrice, }, } = await axios.get(`https://cloud.iexapis.com/stable/stock/${stock.stock.symbol}/quote?token=pk_e9452ea3af5947c887e93a8f7759e4c2`)
        return { ...stock,
          currentPrice: currentPrice.toFixed(2), }
      }))
      setStocks(data)
    }
    getMyStocks()
  }, [ cash, ])
  return (
    <table>
      <tbody>
        {stocks.map(({ stock, quantity, currentPrice, }) =>
          <tr>
            <td>{quantity} shares of {stock.name} @ {currentPrice} each</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default PortfolioTable
