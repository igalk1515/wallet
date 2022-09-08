const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const connectDB = require('./config/dbConn')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const PORT = process.env.PORT || 3001

connectDB()

app.use(cors())

app.use(express.json()) // for parsing application/json

app.use(cookieParser()) // for parsing application/x-www-form-urlencoded

app.use('/', express.static(path.join(__dirname, '/public'))) // serve static files from public folder (index.html) on root route

app.post('/post', (req, res) => {
  console.log('Connected to React')
  res.redirect('/')
})

// middleware
app.use('/', require('./routes/root'))
// app.use('/api', require('./routes/api'))
// app.use('/api/auth', require('./routes/auth'))

app.use('/shoping', require('./routes/shopingRotes'))

app.listen(3001, () => {
  console.log(`Example app listening on port ${PORT}!`)
})

app.all('*', (req, res) => {
  res.status(404)
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'))
  } else if (req.accepts('json')) {
    res.json({ message: '404 Not Found' })
  } else {
    res.type('txt').send('404 Not Found')
  }
})
