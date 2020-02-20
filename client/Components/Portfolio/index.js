import React, { useContext, } from 'react'
import { ContentArea, Nav, Header, VL, } from './Portfolio.css'
import SearchAndBuy from './SearchAndBuy'
import PortfolioTable from './PortfolioTable'
import axios from 'axios'
import { UserContext, } from '../../Context'

const Portfolio = () => {
  const { setUser, } = useContext(UserContext)
  const logout = () => {
    axios.post('/api/auth/logout')
    setUser({})
  }

  return (
    <>
      <Nav>
        <a href={'/'}>portfolio</a>
        <a href={'/'}>transactions</a>
        <button onClick={logout}>logout</button>
      </Nav>

      <Header>Portfolio</Header>

      <ContentArea>
        <PortfolioTable />
        <VL />
        <SearchAndBuy />
      </ContentArea>
    </>
  )
}

export default Portfolio
