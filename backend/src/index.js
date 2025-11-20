import express from 'express';
import { connectToDB } from './config/mongodb.js';
import dotenv from 'dotenv';
import bookRoutes from './routes/book.routes.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT||5000;

app.use(express.json());
app.use('/api/books', bookRoutes )

const startServer = async ()=>{
    try {
        await connectToDB();
        app.on("error", (error=>{
            console.log("Server error:", error);
        }))
        app.listen(PORT,()=>{
            console.log(`Server is running on port http://localhost:${PORT}`);
        })
    } catch (error) {
        error("Failed to start server:", error)
    }
}
startServer();