const mongoose=require('mongoose')

const dbconnect=async()=>{
    try{
        const connect= await mongoose.connect(process.env.Connection)
        console.log(
            "Connected to Database ",
            connect.connection.host,
            connect.connection.name
        );
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}
module.exports=dbconnect;