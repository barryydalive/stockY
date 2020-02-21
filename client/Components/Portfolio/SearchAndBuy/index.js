import React, { useState, useContext, } from 'react'
import Search from './Search'
import Buy from './Buy'
import { SearchAndBuyContext, UserContext, } from '../../../../Context'

const SearchAndBuy = () => {
  const [ stock, setStock, ] = useState({})
  const { user, setUser, } = useContext(UserContext)

  return (
    <div>
      <SearchAndBuyContext.Provider
        value={{
          stock,
          setStock,
        }}>
        Cash - ${Math.floor(user.cash / 100)}.{user.cash % 100}
        <Search />
        {stock.symbol && <Buy />}
      </SearchAndBuyContext.Provider>
    </div>
  )
}

export default SearchAndBuy
