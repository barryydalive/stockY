import React from 'react'
import Login from './Login'
import Portfolio from './Portfolio'

const Home = () => {
  const isLoggedIn = true
  return isLoggedIn ? <Portfolio /> : <Login />
}

export default Home
