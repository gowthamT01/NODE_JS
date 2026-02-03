const http=require('http')
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/plain"})
    res.end("HELLO WORLD")
})
server.listen(5000,()=>{
    console.log("server runs @ %5000 post ")
})