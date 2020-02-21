import React, { useState, } from 'react'
import { ContentArea, Header, VL, } from './Portfolio.css'
import SearchAndBuy from './SearchAndBuy'
import PortfolioTable from './PortfolioTable'

const Portfolio = () => {
  const [ portfolioWorth, setPortfolioWorth, ] = useState(0)

  return (
    <>
      <Header>Portfolio - ${`${portfolioWorth.toString().slice(0, -2)}.${portfolioWorth.toString().slice(-2)}`}</Header>

      <ContentArea>
        <PortfolioTable setPortfolioWorth={setPortfolioWorth} />
        <VL />
        <SearchAndBuy />
      </ContentArea>
    </>
  )
}

export default Portfolio
