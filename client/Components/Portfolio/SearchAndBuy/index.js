import React, { useState, } from 'react'
import Search from './Search'
import Buy from './Buy'
import { SearchAndBuyContext, } from '../../../Context'

const SearchAndBuy = () => {
  const [ stock, setStock, ] = useState({})
  const [ cash, setCash, ] = useState(5000)

  console.log('stock:', stock)
  return (
    <div>
      <SearchAndBuyContext.Provider
        value={{
          stock,
          setStock,
          cash,
          setCash,
        }}>
        Cash - ${cash}
        <Search />
        {stock.symbol && <Buy />}
      </SearchAndBuyContext.Provider>
    </div>
  )
}

export default SearchAndBuy
