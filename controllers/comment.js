const path=require('path')

const commentTable=require("../models/comment")


exports.getCommentsByBlogId = async (req, res, next) => {
    try {
      const blogId = req.params.blogId;
      console.log(`Fetching comments for blogId: ${blogId}`);
      // Fetch comments based on the blogId
      const comments = await commentTable.findAll({
        where: {
          blogId: blogId,
        },
      });
      res.status(200).json({ comments: comments });
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false });
    }
  };
exports.postComment=async(req,res,next)=>{
    console.log("i am executtinggggggggggggg")
    try{
        const comment = req.body.comment1;
       const blogId=req.body.blogId
        console.log(comment)
    
        const newComment = await commentTable.create({
            blogId: blogId,// there is no blog id in blog check it once then and pass some data to blog id then try to save in table
            comment: comment
        });
        console.log('comment')
        console.log(req.body)
        res.status(200).json({message:"Comment is posted successfully",newComment:newComment})
    }catch(err){
        res.status(500).json({success:"false",error:err})
    }
}


exports.deleteComment = async (req, res, next) => {
    try {
        const commentId = req.params.commentId;
        const deletedComment = await commentTable.destroy({
            where: {
                id: commentId
            }
        });

        if (deletedComment) {
            res.status(200).json({ message: 'Comment deleted successfully' });
        } else {
            res.status(404).json({ message: 'Comment not found' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, error: err });
    }
};
