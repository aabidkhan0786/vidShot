import express from "express";
import { addComment, deleteComment, getComments } from "../Controllers/Comment.js";


const router = express.Router()

router.get("/",getComments)
router.post("/",addComment)
router.delete("/:id",deleteComment)

export default router;