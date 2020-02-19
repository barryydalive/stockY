import React from 'react'
import { ContentArea, Nav, Header, VL, } from './Portfolio.css'

const Portfolio = () => {
  return (
    <>
      <Nav>
        <a href={'/'}>portfolio</a>
        <a href={'/'}>transactions</a>
      </Nav>

      <Header>Portfolio</Header>

      <ContentArea>
        aihjsgoakljg Content
        <VL />
        wow other contnet
      </ContentArea>
    </>
  )
}

export default Portfolio
