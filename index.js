import express from "express";
import  dbConnect  from "./dbConnection.js";
import userRoutes from "./Users/user.route.js"
import product from"./Users/access screens/products.route.js"
import cors from "cors";

const app=express();
// var cors =require('cors');
app.use(cors());
//to make app understand json
// api which uses json are called Rest APIs/ Restful APIs 
app.use(express.json());


//db connection function call gareko
dbConnect();


app.use(userRoutes);
app.use(product);


const port =8000
app.listen(port,()=>{
    console.log(`app is listening in port ${port}`);

});