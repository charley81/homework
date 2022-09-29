const express = require('express')
const router = express.Router()
const { allLogs, newForm, createNew } = require('../controllers/log-controller')

// get all logs
router.get('/', allLogs)

// get new form
router.get('/new', newForm)

// create new log
router.post('/', createNew)

module.exports = router
