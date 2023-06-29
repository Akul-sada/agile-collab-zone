import mongoose from "mongoose";
import { env } from "process";


const URI = process.env.DATABASE_ATLAS?.replace('<PASSWORD>',process.env.DATABASE_PASSWORD)

if(!URI){
    throw new Error("Invalid environment variable");
}

export const connectToMongoDB = async ()=>{
    try{
        const { connection } = await mongoose.connect(URI);
        if(connection.readyState == 1){
            return Promise.resolve(true);
        }

    }catch(error){
        return Promise.reject(error);
    }
}