const logModel = require('../models/log-model')
const logSeed = require('../models/log-seed')

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

// @desc get a signle log
// route GET /logs/:id
// @access public
const singleLog = (req, res) => {
  logModel.findById(req.params.id, (error, foundLog) => {
    if (error) {
      res.status(400).json({ error })
    } else {
      res.status(200)
      res.render('logs/Show', { log: foundLog })
    }
  })
}

const editForm = (req, res) => {
  logModel.findById(req.params.id, (error, foundLog) => {
    if (error) {
      res.status(400).json({ error })
    } else {
      res.status(200)
      res.render('logs/Edit', { log: foundLog })
    }
  })
}

const updateLog = (req, res) => {
  if (req.body.broken === 'on') {
    req.body.broken = true
  } else {
    req.body.broken = false
  }

  logModel.findByIdAndUpdate(req.params.id, req.body, (error, foundLog) => {
    if (error) {
      res.status(400).json({ error })
    } else {
      res.status(200)
      res.redirect(`/logs/${req.params.id}`)
    }
  })
}

// @desc delete a single log
// @router DELETE /logs/:id
// access public
const deleteLog = (req, res) => {
  logModel.findByIdAndDelete(req.params.id, (error, deletedLog) => {
    if (error) {
      res.status(400).json({ error })
    } else {
      res.status(200)
      res.redirect('/logs')
    }
  })
}

const seedStaterData = (req, res) => {
  logModel.deleteMany({}, (error, deletedLogs) => {
    if (error) {
      res.status(400).json({ error })
    } else {
      logModel.create(logSeed, (error, createdLog) => {
        if (error) {
          res.status(400).json({ error })
        } else {
          res.status(200)
          res.redirect('/logs')
        }
      })
    }
  })
}

const clearSeedData = (req, res) => {
  logModel.deleteMany({}, (error, deletedLogs) => {
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
  singleLog,
  deleteLog,
  editForm,
  updateLog,
  seedStaterData,
  clearSeedData,
}
