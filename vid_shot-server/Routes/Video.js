import express from "express";
import { addVideo, deleteVideo, getBySearch, getByTags, getVideo, randomVideo, subsVideos, trendVideo, updateVideo, viewVideo } from "../Controllers/Video.js";
import Auth from "../Middlewares/Auth.js";

const router = express.Router()

router.post("/",Auth ,addVideo)
router.get("/:id",Auth,getVideo)
router.put("/:id",Auth,updateVideo)
router.delete("/:id",Auth,deleteVideo)
router.get("/view",Auth,viewVideo)
router.get("/random",randomVideo)
router.get("/trend",trendVideo)
router.get("/subsvideo",Auth,subsVideos)
router.get("/videotags",Auth,getByTags)
router.get("/search",Auth,getBySearch)


export default router;