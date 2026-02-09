import express from 'express'
import { login, logout, Register } from '../controllers/authController.js'
import isUserAuthenticated from '../middleware/userAuth.js'
import { follow, getMyProfile, getOtherUsers, unFollow } from '../controllers/userController.js'

const router = express.Router()


router.post('/register', Register)
router.post('/login', login)
router.get('/logout', logout)
router.get("/profile/:id", isUserAuthenticated, getMyProfile)
router.get("/otherusers/:id", isUserAuthenticated, getOtherUsers)
router.post("/follow/:id", isUserAuthenticated, follow)
router.post("/unfollow/:id", isUserAuthenticated, unFollow)


export default router