import { number, string } from "joi";
import mongoose from "mongoose";
const clientSchema=new mongoose.Schema({
    pickupLocation:String,
    dropoffLocation:String,
    items:String,
    quantity:Number,
    inUnit:Number,
    estimatedPriceInRs:Number,
    wheelers:Number
})
export const ClientRequest=mongoose.model("ClientRequest",clientSchema);
