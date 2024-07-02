import express from 'express'
import { login, logout, signup } from './users.controller.js'

const userRouter=express.Router()
userRouter.post('/login',login)
userRouter.post('/logout',logout)
userRouter.post('/signup',signup)

export default userRouter