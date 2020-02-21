import React, { useContext, } from 'react'
import Login from './Login'
import Home from './Home'
import { UserContext, } from '../Context'

const Route = () => {
  const { user, } = useContext(UserContext)
  const isLoggedIn = user.email ? true : false
  return isLoggedIn ? <Home /> : <Login />
}

export default Route
