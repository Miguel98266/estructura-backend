import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:String,
    last_name:String,
    email:String,
})

export default mongoose.model("User",userSchema)