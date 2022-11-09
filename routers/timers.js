const express = require('express')
const router = express.Router()
const {
  getAllTimers,
  getTimerById,
  createTimer,
  updateTimer,
  startTimer,
  stopTimer,
  deleteTimer,
} = require('../controllers/timers')

router.route('/').get(getAllTimers).post(createTimer)
router.route('/:id').get(getTimerById).patch(updateTimer).delete(deleteTimer)
router.route('/start/:id').patch(startTimer)
router.route('/stop/:id').patch(stopTimer)

module.exports = router
