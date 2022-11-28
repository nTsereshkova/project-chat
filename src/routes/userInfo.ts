import express from "express"
import { showUserInfo } from "../controllers/userController"


const router = express.Router()

router.get("/userInfo",showUserInfo)

export default router