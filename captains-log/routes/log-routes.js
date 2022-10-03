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
  seedStaterData,
  clearSeedData,
  uploadImage,
} = require('../controllers/log-controller')

// get all logs
router.get('/', allLogs)

// get new form
router.get('/new', newForm)

// delete a single log
router.delete('/:id', deleteLog)

// update log
router.put('/:id', updateLog)

// create new log
router.post('/', createNew)

// get edit form
router.get('/:id/edit', editForm)

// get log seed
router.get('/seed', seedStaterData)

// clear seed
router.get('/clear', clearSeedData)

// get single log
router.get('/:id', singleLog)

module.exports = router
