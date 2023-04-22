import express from 'express';

import mongoose from 'mongoose';
// var Teewt = require('mongoose').model('Teewt');
import user from './schema/UserSchema.js';

const app=express();

app.get('/hello',(req,res)=>{
    res.send("Hello This is sanjay")
})

mongoose.connect('mongodb://localhost:27017/Library-Login');
app.listen(4000,()=>{
    console.log("listening at port 4000")
})