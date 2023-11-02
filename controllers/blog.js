const path=require("path")

const blog=require("../models/blog")


exports.getBlog=async(req,res,next)=>{
    try{
    res.sendFile(path.join(__dirname,"../views/createblog.html"))
    }catch(err){
        console.log(err)
        res.status(500).json({error:"Internal Server error"})
    }
}
exports.getPreviousBlog=async(req,res,next)=>{
    try{
        const blogs=await blog.findAll()
        console.log(blogs)
        console.log("hii")
        res.status(200).json({blogs:blogs})
    }catch(err){
        console.log(err)
        res.status(500).json({success:'false'})
    }
}
exports.postBlog=async(req,res,next)=>{
    try{
    console.log("Post request is successfully")

    console.log(req.body)

    const title=req.body.title;
    const author=req.body.author;
    const content=req.body.content
   const allblogs=await  req.user.createBlog({
        title:title,
        author:author,
        content:content,
      
    })
    // const allblogs=await blog.create({
    //     title:title,
    //     author:author,
    //     content:content,
    //     // userId:req.user.id
    // })

    res.status(200).json({message:"blog is post successfully",allblogs:allblogs})
    }catch(err){
        res.status(500).json({success:"false",error:err})
    }
}