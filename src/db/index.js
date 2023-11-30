import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB = async () => {
 try {
  const connectionInstance = await mongoose.connect(`${process.env.MONGOBD_URI}/${DB_NAME}`)
  console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host} `);
 } catch (error) {
  console.log("MONGODB eonnection error: ", error)
  process.exit(1)
 }
}

export default connectDB;