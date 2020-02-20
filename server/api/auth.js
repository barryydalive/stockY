const Router = require('express').Router()

const User = require('../db/models/user')
module.exports = Router

Router.post('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email, }, })
    if (!user) {
      console.log('No such user found:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else if (!user.correctPassword(req.body.password)) {
      console.log('Incorrect password for user:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else {
      req.login(user, err => err ? next(err) : res.json(user))
    }
  } catch (err) {
    next(err)
  }
})

Router.post('/signup', async (req, res, next) => {
  try {
    const { firstName, lastName, password, email, } = req.body
    const signupInfo = {
      firstName,
      lastName,
      password,
      email,
    }
    const user = await User.create(signupInfo)
    req.login(user, err => err ? next(err) : res.json(user))
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})

Router.post('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

Router.get('/me', (req, res) => {
  res.json(req.user)
})
