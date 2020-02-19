import React from 'react'

const PortfolioTable = () => {
  const stocks = [ {}, {}, {}, {}, {}, {}, ]
  return (
    <table>
      {stocks.map(stock =>
        <tr>
          <td>fake stock data here</td>
        </tr>
      )}
    </table>
  )
}

export default PortfolioTable
