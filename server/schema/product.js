const mongoose=require('mongoose')

const Prodschema=new mongoose.Schema({
   
        Img:{
            type:String,
            required:true
        },
        Title:{
            type:String,
            required:true
        },
        Category:{
            type:String,
            required:true
        },
        Description:{
            type:String,
            required:true
        },
})

module.exports=mongoose.model('Prodschema',Prodschema);