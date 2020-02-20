import React, { useContext, } from 'react'
import Login from './Login'
import Portfolio from './Portfolio'
import { UserContext, } from '../Context'

const Home = () => {
  const { user, } = useContext(UserContext)
  const isLoggedIn = user.email ? true : false
  return isLoggedIn ? <Portfolio /> : <Login />
}

export default Home
