import Users from "./user.model.js";
import checkMongoValidity from "./utillity/utils.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";






export const checkIfUserExists=async(req,res,next)=>{
    const userId=req.params.id;

//check mongoid validity
const isValiduserId =checkMongoValidity(userId);
if (!isValiduserId) return res.status(400).send({message:"invalid user id"})
    // check if user with id exists 
const userDetails=await Users.findOne({_id: userId})

    // if not user 
    if(!userDetails){
        return res.status(404).send({message:"user doesn't exist"})
}
req.usersData=userDetails;
next();
}







// get user details
export const getUserDetails= async(req,res)=>{
    

   
    const userData=req.usersData
     
    return res.status(201).send(userData);
    };







//create users 
export const createUsers=async(req,res)=>{
   
    try {
       
      console.log(req.body) 
       
       
        let newUsers=req.body;
       let hashedPassword = await bcrypt.hash(newUsers.password,8)
        newUsers.password=hashedPassword;
    
        

const CheckIfEmailExists= await Users.findOne({email:newUsers.email})


if (CheckIfEmailExists){
    return res.status(400).send({message:"User already exists"});
}

        await Users.create(newUsers)
        
        return res.status(201).send ({message:"Users added sucessfully."});
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
   
   
};






//update users 
export const updateUsers=async(req,res)=>{
    const userId=req.params.id;
    
    const newData=req.body;
    await Users.updateOne({_id:userId},{
        firstName:newData.firstName,
    lastName:newData.lastName,
    email:newData.email,
    address:newData.address,
    phoneNumber:newData.phoneNumber,
    gender:newData.gender,
    roles:newData.roles
    })
return res.status(200).send({message:"user updated successfully "})
}

//display all users 
export const getAllUsers=async(req,res)=>{
    const allUsers=await Users.find();
    return res.status(200).send(allUsers);
}
    
    







//login user
export const loginUser= async (req,res)=>{
    
    //extract login credentials from req.body
    const loginCredentials=req.body;
    
    // console.log(loginCredentials);
    //validate login credentials: yo chai ma frontend bata garchhu

    // find user by email
let user= await Users.findOne({email:loginCredentials.email})
// console.log(user);
    //if not user , throw error
if(!user){
    return res.status(404).send({message:"user doesn't exist"})
}
    // password match check
const passwordMatch = await bcrypt.compare(
    loginCredentials.password, 
   user.password
    );
// console.log(passwordMatch);
    // if not password match throw error 
if(!passwordMatch){
    return res.status(404).send({message:"Invalid credentials"});
}
    //generate a token
   const token = jwt.sign({email:user.email},"killerwhaletechniquetokillasimplewhiteshark");
    console.log(token);
    //hide password
    user.password=undefined;
    //send appropriate response
res.status(200).send({user,token});

}




