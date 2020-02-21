import React, { useState, useEffect, } from 'react'
import ReactDOM from 'react-dom'
import Route from './Components/Route'
import axios from 'axios'
import { UserContext, } from './Context'
import Loader from 'react-loader'
import './index.css'

const App = () => {
  const [ loaded, setLoaded, ] = useState(false)
  const [ user, setUser, ] = useState({})
  const options = {
    lines: 13,
    length: 20,
    width: 10,
    radius: 30,
    scale: 1.00,
    corners: 1,
    color: '#000',
    opacity: 0.25,
    rotate: 0,
    direction: 1,
    speed: 1,
    trail: 60,
    fps: 20,
    zIndex: 2e9,
    top: '50%',
    left: '50%',
    shadow: false,
    hwaccel: false,
    position: 'absolute',
  }
  useEffect(() => {
    const getMe = async () => {
      const { data: { email, firstName, lastName, cash, }, } = await axios.get('/api/auth/me')
      setUser({
        email,
        firstName,
        lastName,
        cash,
      })
      setLoaded(true)
    }
    getMe()
  }, [])

  return (
    <UserContext.Provider value={{
      user,
      setUser,
    }}>
      <Loader className='spinner' options={options}loaded={loaded}>
        <Route />
      </Loader>
    </UserContext.Provider >
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
