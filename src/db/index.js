import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv";

dotenv.config(); 

const connectDB = async () => {
    try {
        console.log("MongoDB URI:", process.env.MONGODB_URI);

        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

        console.log(`\n MongoDB Connected! DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB Connection Failed: ", error.message);
        process.exit(1);
    }
};

export default connectDB;
