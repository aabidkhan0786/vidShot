import { configDotenv } from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRoutes from "./Routes/Auth.js"


const app = express()
configDotenv()

app.use(express.json())

app.get("/",(req,res)=>{
    res.status(200).json("Welcome to AAK's VidShot!!");
})

app.use("/aak/auth",authRoutes)

const port = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URL,{useNewUrlParser: true, useUnifiedTopology:true} )
.then(()=> app.listen(port,()=>console.log(`server running at ${port}`)))
.catch(error=>console.log(error))