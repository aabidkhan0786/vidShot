import Auth from "../Middlewares/Auth.js";
import express from express;
import { subsUser, unSubsUser } from "../Controllers/User.js";
const router = express.Router()

// get user
//update user
router.put("/:id",Auth,updateUser)

// subscribe user
router.put("/sub/:id",Auth,subsUser)

// unsubscribe user
router.put("/unsub/:id",Auth,unSubsUser)

