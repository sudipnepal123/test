import express from "express";
import jwt from "jsonwebtoken";
import Users from "../user.model.js";

const router=express.Router();
let products =[];

router.post("/product/add",async(req,res)=>{
   
    const authorization= req.headers.authorization;
    const splittedToken = authorization.split(" ");
    const token=splittedToken[1];
   
//decrypt the token
try {
    const decryptedValue = jwt.verify(token,"killerwhaletechniquetokillasimplewhiteshark")
    
} catch (error) {
    return res.status(401).send({message:"unauthorized access"});
}
const userEmail = decryptedValue.email;

//email decrypt vayepachhi if tyo user mero database ma chha ki chhaina check garnu parne hunchha. so next plus level of security
const user=await Users.findOne({email:userEmail});
if (!user){
    return res.status(401).send({message:"unauthorized access"});
}

const newProduct=req.body;

products.push(newProduct);

return res.status(201).send({message:"product added"})
})


router.get("/product",(req,res)=>{
   
    return res.status(201).send(products);
    })


export default router;
