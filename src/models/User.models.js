import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique:true,
        lowercase:true,
        trim:true
    },
    email:{
        type: String,
        required: true,
        unique:true,
        lowercase:true,
        trim:true,
        match:[/^\S+@\S+\.\s+$/,"Please enter a valid email"]
    },
    Contact_NO:{
        type:String,
        required:true,
        unique:true,
        match:[/^\d{10}$/,"Phone number must be exactly 10 digits"]
        
    },
    password:{
        type:String,
        required:true,
    }
},{timestamps: true})
export const User = mongoose.model("User",userSchema)