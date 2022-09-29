const express = require('express')
const router = express.Router()
const {
  allLogs,
  newForm,
  createNew,
  singleLog,
  deleteLog,
  editForm,
  updateLog,
} = require('../controllers/log-controller')

// get all logs
router.get('/', allLogs)

// get new form
router.get('/new', newForm)

// create new log
router.post('/', createNew)

// get single log
router.get('/:id', singleLog)

// get edit form
router.get('/:id/edit', editForm)

// update log
router.put('/:id', updateLog)

// delete a single log
router.delete('/:id', deleteLog)

module.exports = router
