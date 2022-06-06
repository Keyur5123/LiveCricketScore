// const mongoose = require("mongoose");
import mongoose from "mongoose";

const conn=mongoose.connect('mongodb+srv://admin:admin@cluster0.qtmyz.mongodb.net/ContactUs?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
},(err) => {
    if(err){
        return console.log("error occure",err.message);
    }    
    return console.log("connection successfully");
}

); 

export default conn;