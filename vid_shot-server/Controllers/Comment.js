import Comments from "../Models/Comment.js"
import Videos from "../Models/Video.js"

export const addComment = async (req,res)=>{
    try {
        const comment = await Comments({...req.body,userId:req.userId})
        console.log(comment);
        const savedComment = await comment.save()
        console.log(savedComment);
        res.status(201).json(savedComment)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
}

export const deleteComment = async (req,res)=>{
    try {
        const comment = await Comments.findById(req.params.id)
        const video = await Videos.findById(req.params.id)
        console.log(video,comment);
        if(req.userId === comment.userId || req.userId === video.userId){
            await Comments.findByIdAndDelete(req.params.id)
            res.status(203).json("video has been deleted!")
        }else{
            res.status(405).json("You are not allowed to delete this comment!")
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
    }
}

export const getComments = async (req,res)=>{
    try {
        const comments = await Comments.find({videoId:req.params.id})
        console.log({comments});
        res.status(200).json(comments)
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})   
    }
}