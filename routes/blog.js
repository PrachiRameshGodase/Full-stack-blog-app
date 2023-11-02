const express=require('express')
const router=express.Router()

const createController=require("../controllers/blog")
const commentController=require("../controllers/comment")

router.get("/",createController.getBlog)
router.post("/blog",createController.postBlog)
router.get('/previous-blog', createController.getPreviousBlog);
router.post("/comment",commentController.postComment)// i have added "/comment" route in this file to avoid multiple conflicts between different folder but u can use it in different file if u want
router.get('/previous-comments/:blogId',commentController.getCommentsByBlogId)
router.delete('/comments/:commentId',commentController.deleteComment)






module.exports=router;

