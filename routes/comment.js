const express=require('express')
const router=express.Router()


const commentController=require('../controllers/comment')
router.post('/comment',commentController.postComment)

module.exports=router








