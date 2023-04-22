import mongoose from "mongoose";

const userschema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        Dept:{
            type:String,
            required:true,
        },
        RollNo:{
            type:Number,
            required:true,
        },
        MobileNumber:{
            type:Number,
            required:true,
        }
    }
)

const user =new mongoose.model('userschema',userschema);
export default user;