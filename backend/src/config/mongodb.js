import mongoose from 'mongoose';

export const connectToDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI,console.log("Connecting to MongoDB"));
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Failed to connect to MongoDB",error);
        process.exit(1);
    }
}