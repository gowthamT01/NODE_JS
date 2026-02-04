const express=require('express');
const app=express();//here  express() will create an app and set that appto the app varible
//HERE WE SEND DATA
app.get("/",(req,res)=>{
res.status(200).send("hello express app")
})//
app.post("/",(req,res)=>{
    res.status(200).send("hello this is post mentod")
})
//postmethod for use SEND form data



app.listen(5000,()=>{
    console.log("server run at port 5000")
})