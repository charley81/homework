const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send(`
    <h1>99 Bottles of beer on the wall</h1>
    <a href='/98'>Take 1</a>
  `)
})

app.get('/:number', (req, res) => {
  const num = req.params.number

  if (num > 0) {
    res.send(`
    <h1>${num} Bottles of beer on the wall.</h1>
    <a href='/${parseInt(req.params.number - 1)}'>Take 1</a>
  `)
  } else {
    res.send(`
    <h1>${num} Bottles of beer on the wall.</h1>
    <a href='100'>Start Over</a>
  `)
  }
})

app.listen(PORT, () => console.log(`listening on port: ${PORT}`))
