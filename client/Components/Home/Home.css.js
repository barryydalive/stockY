import styled from 'styled-components'
import { NavBackgroundColor, BackgroundColor, } from '../../colors'

export const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  background-color: ${NavBackgroundColor};

  * {
    margin: 10px;
  }
`
export const Header = styled.h2`
  margin: 5vh 8vw
`

export const Body = styled.div`
  height: 100vh;
  background-color: ${BackgroundColor};
  overflow:hidden;
`
