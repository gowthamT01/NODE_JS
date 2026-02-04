//========Creating server========//

const http=require('http')//import server
const server=http.createServer((req,res)=>{//creating server
    res.writeHead(200,{"Content-type":"application/json"})//writing the import tent server request//it take 2 parametre  status code and dataformate in object type
    //res help to give the server data from server to web page
    res.end(`{"Hello":"Gowthu"}`)//finr stoping the final output and it show in browser
})
server.listen(5000,()=>{
    console.log("Server Running @ port number 5000")
})