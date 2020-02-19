import styled from 'styled-components'

export const ContentArea = styled.div`
  margin: 5vh 10vw;
  display: flex;
  min-height: 20vh;
  height: 20vh;
  justify-content: space-between;
  *:nth-child(1){
    flex:3
  }
  *:nth-child(3){
    flex:2;
    margin: 0 1rem
  }
  
`
export const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  * {
    margin: 10px;
  }
`
export const Header = styled.h2`
  margin: 5vh 8vw
`

export const VL = styled.div`
height: 70%;
border-left: 3px solid black;
`
