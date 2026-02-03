const fs=require('fs')
//writing file(Asyncronous)
fs.writeFile("asynctext.txt","Hello Node js Async+Readfile",(err)=>{
if(err) throw err;
console.log("file return Completly");

//reading file
fs.readFile("asynctext.txt",{encoding:"utf-8"},(err,data)=>{
    console.log("Reaad file asynce",data)
})
});

console.log("file writing procrsing");
//file writing procrsing
/* file return Completly */