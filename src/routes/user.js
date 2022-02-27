const express = require('express')
const router = express.Router()
const { v4 } = require('uuid');

const authController = require('../controllers/authControllers')
const { requireAuth, redirectIfLoggedIn } = require('../middleware/userAuth')
router.get('/verify/:id', authController.emailVerify_get)
router.get('/signup',redirectIfLoggedIn, authController.signup_get)
router.post('/signup', authController.signup_post)
router.get('/login', redirectIfLoggedIn, authController.login_get)
router.post('/login', authController.login_post)
router.get('/logout', requireAuth, authController.logout_get)
router.get('/addBank', requireAuth, authController.addBank_get)
router.post('/addBank', requireAuth, authController.addBank_post)
router.get('/automateBills', requireAuth, authController.automateBills_get)
router.post('/automateBills/:auto', requireAuth, authController.automateBills_post)
module.exports = router