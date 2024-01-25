import express from "express";
import { checkIfUserExists, createUsers, getAllUsers, getUserDetails, loginUser, updateUsers } from "./user.service.js";



const router= express.Router()



//add users
router.post("/users/add",createUsers);


// get details
router.get("/users/details/:id",checkIfUserExists,getUserDetails);


//update details 
router.put("/users/update/:id",checkIfUserExists,updateUsers);


//get all users 
router.get("/users/all",getAllUsers);

//login user
router.post("/users/login",loginUser);


export default router;