const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', homeController.getIndex)
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)

router.get('/about', homeController.getAbout)
// router.post('/about', homeController.postAbout)
router.get('/otherproducts', homeController.getOtherproducts)
// router.post('/otherproducts', homeController.postOtherproducts)
router.get('/forgot', homeController.getForgot)
// router.post('/forgot', homeController.postForgot)

module.exports = router