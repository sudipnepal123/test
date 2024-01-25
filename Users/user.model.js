import mongoose from "mongoose";

// set rules (schema)
const usersSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    address:String,
    phoneNumber:Number,
    gender:{
        type:String,
        required:true,
        enum:["male","female","others"]
    },
    email:{
        type:String,
        required:true,
        trim:true,
        minlength:5,
        maxlength:40,
        unique:true,
        lowercase:true,

},
userName:String,

password:{
        type:String,
        required:true,
        trim:true,

},

    roles:String

})





//create table(model)
const Users = mongoose.model("Users",usersSchema);


export default Users;