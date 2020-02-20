import React, { useState, useEffect, } from 'react'
import ReactDOM from 'react-dom'
import Home from './Components/Home'
import axios from 'axios'
import { UserContext, } from './Context'

const App = () => {
  const [ user, setUser, ] = useState({})
  useEffect(() => {
    const getMe = async () => {
      const { data: { email, firstName, lastName, }, } = await axios.get('/api/auth/me')
      setUser({
        email,
        firstName,
        lastName, })
    }
    getMe()
  }, [])
  return (
    <UserContext.Provider value={{
      user,
      setUser,
    }}>
      <Home />
    </UserContext.Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
