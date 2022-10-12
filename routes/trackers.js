const express = require('express')
const router = express.Router()
const trackersController = require('../controllers/trackers')
const { ensureAuth } = require('../middleware/auth')

router.get('/', ensureAuth, trackersController.getTrackers)

router.post('/createFBTracker', trackersController.createFBTracker)
router.post('/createTTTracker', trackersController.createTTTracker)

router.delete('/deleteFBTracker', trackersController.deleteFBTracker)
router.delete('/deleteTTTracker', trackersController.deleteTTTracker)

router.get('/fbtrack/:trackerId', trackersController.doFBTrack)
router.get('/tttrack/:trackerId', trackersController.doTTTrack)

module.exports = router