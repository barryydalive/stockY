import React from 'react'
import { ContentArea, Nav, Header, VL, } from './Portfolio.css'
import SearchAndBuy from './SearchAndBuy'
import PortfolioTable from './PortfolioTable'

const Portfolio = () => {
  return (
    <>
      <Nav>
        <a href={'/'}>portfolio</a>
        <a href={'/'}>transactions</a>
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
