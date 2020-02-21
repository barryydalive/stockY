import React from 'react'
import { ContentArea, Header, VL, } from './Portfolio.css'
import SearchAndBuy from './SearchAndBuy'
import PortfolioTable from './PortfolioTable'

const Portfolio = () => {

  return (
    <>
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
