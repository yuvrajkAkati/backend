import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";




const connectDB = async ()=>{
    try {
      //gives back an object can store it in a variable
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`\n mongoDB connected !! DB HOST : ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("mongodb connection error ", error);
        process.exit(1)
    }
}

export default connectDB;