//require('dotenv').config({path:})
import dotenv from "dotenv"

import connectDB from "./db/index.js";

dotenv.config({
    path : './env'
})

connectDB()




























/*import express from 'express'
const app = express()ect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    app.on("error",(error)=>{
        console.log("err: ",error);
        throw error
    })
    app.listen(process.env.PORT,()=>{
        console.log(`app is listening on port ${process.env.PORT}`);
    })
    } catch (error) {
        console.error("error: ",error)
        throw error
    }
})

(async ()=>{
    try {
    await mongoose.conn
*/
