import mongoose from 'mongoose';
import { MONGODB_URI } from './config.js';

export const connectDB = async () => {
    try{
        mongoose.set('strictQuery', false)
        const conn = await mongoose.connect(MONGODB_URI)
        console.log(`Mongo connected ${conn.connection.name}`);
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}