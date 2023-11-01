const express=require('express')
const router=express.Router()

const createController=require("../controllers/blog")

router.get("/",createController.getBlog)
router.post("/blog",createController.postBlog)
router.get('/previous-blog', createController.getPreviousBlog);







module.exports=router;

