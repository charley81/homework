const logModel = require('../models/log-model')

// @desc get all logs
// @router GET /logs
// @access public
const allLogs = (req, res) => {
  logModel.find({}, (error, foundLogs) => {
    if (error) {
      res.status(400).json({ error })
    } else {
      res.status(200)
      res.render('logs/Index', { logs: foundLogs })
    }
  })
}

// desc get new form
// @route GET /logs/new
// @access public
const newForm = (req, res) => {
  res.render('logs/New')
}

// @desc creating new log in db
// @route POST /logs
// @access public
const createNew = (req, res) => {
  if (req.body.broken === 'on') {
    req.body.broken = true
  } else {
    req.body.broken = false
  }

  logModel.create(req.body, (error, createdLog) => {
    if (error) {
      res.status(400).json({ error })
    } else {
      res.status(200)
      res.redirect('/logs')
    }
  })
}

module.exports = {
  allLogs,
  newForm,
  createNew,
}
