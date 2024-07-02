import express from 'express'
import { addComment, deleteComment, getUserWithPostsAndComments, readAllComment, updateComment } from './comments.controller.js'
const commentRouter=express.Router()

commentRouter.get('/read',readAllComment)
commentRouter.post('/create',addComment)
commentRouter.put('/update',updateComment)
commentRouter.delete('/delete',deleteComment)
commentRouter.get('/getUserWithPostsAndComments',getUserWithPostsAndComments)

export default commentRouter