import React, { useContext, } from 'react'
import { Nav, Body, } from './Home.css'
import axios from 'axios'
import { UserContext, } from '../../Context'
import Portfolio from './Portfolio'
import Transactions from './Transactions'
import { BrowserRouter as Router, Route, Switch, Link, } from 'react-router-dom'

const Home = () => {
  const { setUser, } = useContext(UserContext)
  const logout = () => {
    axios.post('/api/auth/logout')
    setUser({})
  }
  return (
    <Router>
      <Nav>
        <Link to={'/'}>portfolio </Link>
        <Link to={'/transactions'}>transactions</Link>
        <button onClick={logout}>logout</button>
      </Nav>
      <Body>
        <Switch>
          <Route path='/transactions' component={Transactions} />
          <Route path='/' component={Portfolio} />
        </Switch>
      </Body>
    </Router>
  )
}

export default Home
