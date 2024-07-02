import express from 'express'
import { createPost, deletePost, getSpecificPost, readPosts, updatePost } from './posts.controller.js'

const postRouter=express.Router()
postRouter.get('/read',readPosts)
postRouter.post('/create',createPost)
postRouter.put('/update',updatePost)
postRouter.delete('/delete',deletePost)
postRouter.get('/getSpecificPost',getSpecificPost)

export default postRouter