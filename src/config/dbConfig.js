const mongoose = require('mongoose');

const connectDB = async () =>
{
    try 
    {
        mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    } 
    catch (error) 
    {
        console.log(error.message);
    }
}

module.exports = connectDB;