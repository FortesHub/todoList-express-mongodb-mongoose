import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

function Connection(){
const MONGODB_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@react-todo.f0s3cjv.mongodb.net/?retryWrites=true&w=majority`;

    mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

    mongoose.connection.on('connected', () => { console.log('Database connected')})
    mongoose.connection.on('disconnected', () => { console.log('Database disconnected')})
    mongoose.connection.on('error', () => { console.log('Error while connecting with databse', error.message);})
}

export default Connection;