//db connection ko lagi

import mongoose from "mongoose";

 const dbConnect = async() => {
    try {
        await mongoose.connect("mongodb+srv://aakash:Bhariya123@cluster0.vb2mlsu.mongodb.net/bhariya?retryWrites=true&w=majority");
        console.log("DataBase connected..")
    
    } catch (error) {
    console.log("Database connection failed.");
    console.log(error.message);
    }
    };
    // export {dbConnect}; //normal wala 
    export default dbConnect;
    