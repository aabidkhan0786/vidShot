import express from "express";
import { addComment, deleteComment, getComments } from "../Controllers/Comment.js";
import Auth from "../Middlewares/Auth.js";

const router = express.Router()

router.get("/:id",Auth,getComments)
router.post("/",Auth,addComment)
router.delete("/:id",Auth,deleteComment)

export default router;