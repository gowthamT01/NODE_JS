const http=require('http')
const fs=require('fs')
const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        //it render same default page 
        //requst have the information about tha all routing  and http requet
        res.writeHead(200,{"content-type":"text/plain"})
        res.end("Home page")
    }
    else if(req.url=='/about'){
        //it render home page
        res.writeHead(200,{"content-type":"text/plain"})
        res.end("about pahe")
    }
    //adiing video formate file
    else if(req.url='/file'){
        //here reading file
        const readStream=fs.createReadStream("./Screen Recording 2026-01-19 162818.mp4")
        res.writeHead(200,{"content-type":"video/mp4"})
        //here rendering file
        readStream.pipe(res);  
        //here it will stowly load and play like youtube video 
    }
    else{
        //hre rout not math do it give 404 verror
        res.writeHead(404,{"content-type":"text/plain"})
        res.end("404 page not Founf ERROR!")
        
    }
   
})
server.listen(5000,()=>{
    console.log("server runs @ %5000 post ")
}) 