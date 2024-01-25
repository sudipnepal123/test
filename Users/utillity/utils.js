import mongoose from "mongoose"

const checkMongoValidity=(id)=>{
const isValid=mongoose.Types.ObjectId.isValid(id);
return isValid;
}
export default checkMongoValidity;
