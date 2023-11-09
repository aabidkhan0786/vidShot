import Auth from "../Middlewares/Auth.js";
import express from "express";
import { updateUser, subsUser, unSubsUser, likeVideos, disLikeVideos, getUser } from "../Controllers/User.js";
const router = express.Router()

// get user
router.get("/find/:id",getUser)

//update user
router.put("/:id",Auth,updateUser)

// subscribe user
router.put("/sub/:id",Auth,subsUser)

// unsubscribe user
router.put("/unsub/:id",Auth,unSubsUser)

// like video
router.put("/like/:videoid",Auth,likeVideos)

// dislike video
router.put("/dislike/:videoid",Auth,disLikeVideos)

export default router;