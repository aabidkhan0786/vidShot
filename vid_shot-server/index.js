import { configDotenv } from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRoutes from "./Routes/Auth.js"
import videoRoutes from "./Routes/Video.js"
import commentRoutes from "./Routes/Comment.js"
import userRoutes from "./Routes/User.js"
import cors from "cors";


const app = express()
configDotenv()

app.use(cors())
app.use(express.json({ limit: '10mb' }));

app.get("/", (req, res) => {
    res.status(200).json("Welcome to AAK's VidShot!!");
})

app.use("/aak/auth", authRoutes)
app.use("/aak/user", userRoutes)
app.use("/aak/video", videoRoutes)
app.use("/aak/comment", commentRoutes)

const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(port, () => console.log(`server running at ${port}`)))
    .catch(error => console.log(error))