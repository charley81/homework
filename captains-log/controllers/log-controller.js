// @desc get all logs
// @router GET /logs
// @access public
const allLogs = (req, res) => {
  res.json({ message: 'ok' })
}

// desc get new form
// @router GET /logs/new
// @access public
const newForm = (req, res) => {
  res.render('logs/New')
}

module.exports = {
  allLogs,
  newForm,
}
