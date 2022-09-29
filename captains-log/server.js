const express = require('express')
const app = express()
const colors = require('colors')

const PORT = process.env.PORT || 3000

// body parser middleware need this or req.body will be undefined
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// css middleware
app.use(express.static('public'))

// view engine setup
app.set('view engine', 'js')
app.engine('js', require('express-react-views').createEngine())

// setup routes
app.use('/logs', require('./routes/log-routes'))

app.listen(PORT, () => console.log(`listening on port: ${PORT}`))
