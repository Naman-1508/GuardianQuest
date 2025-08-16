import mongoose from "mongoose";

const storySchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    content:{
        type:String,
        required:true
    },
    image:{
        type:String,
        default:""
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref : "User",
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    isAIgenerated:{
        type:Boolean,
        default:false,
    }
},{timestamps:true})

export const Story = mongoose.model("Story",storySchema)