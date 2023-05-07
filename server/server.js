const express=require('express');
const mongoose=require('mongoose');
const user=require('./schema/UserSchema');
const app = express();
const dotenv=require('dotenv').config();
const dbconnect=require('./config/dbConnection');
const MockData=require('./Mockdata/Mockdata');
const product=require('./schema/product')
const bodyParser=require('body-parser');
const userschema=require('./schema/UserSchema')
const circularJSON = require('circular-json');
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/Data', async(req, res) => {
  // const books=product.find();
  const books=await product.find();
  // app.use(express.json())
  // res.send("books")
  res.status(200).json(books)
  // res.send(books)
  console.log(books)
});

app.post('/signup',async(req,res)=>{
    // MockData.map(async(prod)=>{
    //   if(MockData)
    //   {
    //     const contact = await product.create(
    //       prod
    //   );
    //   }
    // })
    const {Dept,name,RollNo,MobileNumber,Password} =req.body;
    // console.log(name,Dept,RollNo,mobile,Password)
    if(Dept && name && RollNo && MobileNumber && Password)
    {
    const user= await userschema.create(
      {
        name,
        Dept,
        RollNo,
        MobileNumber,
        Password
      }
    )
    }
    else
    {
       throw new error("All fields are required")
    }
    res.json({"message":"Signup succes"})
});

app.get('/login',async(req,res)=>{
  const user=await userschema.find({"name":req.body.name});
  if(user===[])
  {
  return res.json({"message":"Login succes"})
  }
  else
  {
    res.send("user not found")
  }
  // res.send(user)
})

//database connection
dbconnect()
app.use(express.json())
app.listen(process.env.port,()=>{
    console.log(`Listening at port ${process.env.PORT}`);
})