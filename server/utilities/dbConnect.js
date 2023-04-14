import config from 'config';
import mongoose from 'mongoose';

const mongoUrl = config.get('mongoUrl');

async function dbConnect() {
    try {
        await mongoose.connect(mongoUrl)
        console.log('You are connected to mongoDB database.');
    }
    catch(error) {
        console.log(error);
    }
}

dbConnect()