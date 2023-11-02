const path=require('path')

const commentTable=require("../models/comment")


exports.postComment=async(req,res,next)=>{
    console.log("i am executtinggggggggggggg")
    try{
        const comment = req.body.comment1;

        console.log(comment)
    
        const newComment = await commentTable.create({
            // blogId: req.blog.blogid,// there is no blog id in blog check it once then and pass some data to blog id then try to save in table
            comment: comment
        });
        console.log('comment')
        console.log(req.body)
        res.status(200).json({message:"Comment is posted successfully",newComment:newComment})
    }catch(err){
        res.status(500).json({success:"false",error:err})
    }
}