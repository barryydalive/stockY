import React, { useState, useEffect, } from 'react'
import { Header, } from '../Home.css'
import { ContentArea, } from './Transactions.css'
import axios from 'axios'

const Transactions = () => {
  const [ transactions, setTransactions, ] = useState([])
  useEffect(()=> {
    const getTransactions = async()=> {
      const { data: transFromDB, } = await axios.get('/api/transaction')
      setTransactions(transFromDB)
    }
    getTransactions()
  }, [])
  return (
    <>
      <Header>Transactions</Header>
      <ContentArea>
        <div>
          {transactions.map(({ numOfShares, stock, pricePerShare, }) =>
            <p>BUY - {stock.symbol} {numOfShares} @ ${`${pricePerShare}`.slice(0, -2)}.{`${pricePerShare}`.slice(-2)}</p>
          )}
        </div>
      </ContentArea>
    </>
  )
}

export default Transactions
