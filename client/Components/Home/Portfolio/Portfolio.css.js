import styled from 'styled-components'

export const ContentArea = styled.div`
  margin: 5vh 10vw;
  display: flex;
  min-height: 20vh;
  height: 20vh;
  justify-content: space-between;
  > *:first-child{
    flex:3
  }
  > *:nth-child(3){
    flex:2;
    margin: 0 1rem
  }
`

export const Header = styled.h2`
  margin: 5vh 8vw
`

export const VL = styled.div`
  height: 70%;
  border-left: 3px solid black;
`

export const PortfolioRow = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 10px;
`

export const Symbol = styled.div`
  color: ${props => props.color || 'grey'};
  margin-right: 1em;
`
export const RowLeftSide = styled.div`
  display:flex;
  justify-content:space-between;
`
