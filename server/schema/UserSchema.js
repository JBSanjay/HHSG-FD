const mongoose=require('mongoose')

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
        },
        Password:{
            type:String,
            required:true,
        }
    }
)

module.exports =mongoose.model('userschema',userschema);