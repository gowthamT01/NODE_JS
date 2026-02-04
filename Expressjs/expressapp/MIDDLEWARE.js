const express=require('express');
const app=express();//here  express() will create an app and set that appto the app varible

app.use((req,res,next)=>{
console.log("resquest URL",req.url)
next();//it moves allowto next get and post method
})//oit passses the 
app.get("/",(req,res)=>{
res.status(200).send("hello express app")
})
app.post("/",(req,res)=>{
    res.status(200).send("hello this is post mentod")
})


//here midel ware will execute then themoves all ather http requests.

app.use((req,res,next)=>{
    res.status(400).send("404 not found 404 eoor")
})

app.listen(5000,()=>{
    console.log("server run at port 5000")
})