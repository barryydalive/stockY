const express = require('express')
const app = express()
const path = require('path')
const db = require('./db')
const bodyParser = require('body-parser')
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const sessionStore = new SequelizeStore({ db, })

const passport = require('passport')

passport.serializeUser((user, done) => done(null, user.id))

passport.deserializeUser(async (id, done) => {
  try {
    const user = await db.models.user.findByPk(id)
    done(null, user)
  } catch (err) {
    done(err)
  }
})
sessionStore.sync()
db.sync()
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'my best friend is Cody',
    store: sessionStore,
    resave: false,
    saveUninitialized: false,
  })
)
app.use(passport.initialize())
app.use(passport.session())

app.use(express.static(path.join(__dirname, '..', 'dist')))
app.use(bodyParser.json())
app.use('/api', require('./api'))

app.use('*', (req, res, next)=> {
  res.sendFile(path.join(__dirname, '..', 'dist/index.html'))
})

const port = process.env.PORT || 3000

app.listen(port, ()=>{
  console.log(`app is running on PORT ${port}`)
})
