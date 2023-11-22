import { combineReducers } from "redux";
import User from "./User"
import Video from "./Video"
import Comment from "./Comment"
import CurrentVideo from "./CurrentVideo"

export default combineReducers({User,Video,Comment,CurrentVideo})