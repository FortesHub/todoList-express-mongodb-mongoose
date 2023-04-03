import mongoose from 'mongoose';

function Connection(){
const MONGODB_URI ='mongodb+srv://beatrizcmpf:react-todo@react-todo.f0s3cjv.mongodb.net/?retryWrites=true&w=majority';

    mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

    mongoose.connection.on('connected', () => { console.log('Database connected')})
    mongoose.connection.on('disconnected', () => { console.log('Database disconnected')})
    mongoose.connection.on('error', () => { console.log('Error while connecting with databse', error.message);})
}

export default Connection;