//jshint esversion:6

const express = require('express');
const app = express();

//get method
app.get("/",function(req,res){
    res.send("hello");
})
//this means that what to do when the user visits the home page or root page of our website denoted by /

app.get("/contact",function(req,res){
    res.send("Contact me at aadityadev1659@gmail.com");
})

app.get("/about",function(req,res){
    res.send("This webpage is owned by Aaditya Dev Sharma");
})

//go to localhost:3000 to see our website 
app.listen(3000,function(){
    console.log("Server started on port 3000..");
})

