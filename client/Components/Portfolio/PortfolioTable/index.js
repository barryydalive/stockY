import React from 'react'

const PortfolioTable = () => {
  const stocks = [ {}, {}, {}, {}, {}, {}, ]
  return (
    <table>
      <tbody>
        {stocks.map(stock =>
          <tr>
            <td>fake stock data here</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default PortfolioTable
