const mongoose = require('mongoose')

function mongoConfig() {
  mongoose.connect(process.env.MONGO_DB)
  mongoose.connection.once('open', () => {
    console.log(`mongoDB connected: ${mongoose.connection.host}`.cyan.underline)
  })
}

module.exports = mongoConfig
