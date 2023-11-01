const path=require('path')

const comment=require("../models/comment")


exports.postComment=async(req,res,next)=>{
    try{
        const comment = req.body.comment;

        console.log(req.body)
        const newComment = await Comment.create({
            blogId: req.blog.id,
            comment: comment
        });
        console.log('comment')
        console.log(req.body)
        res.status(200).json({message:"Comment is posted successfully",newComment:newComment})
    }catch(err){
        res.status(500).json({success:"false",error:err})
    }
}