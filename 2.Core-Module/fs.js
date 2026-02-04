const fs=require("fs");//inbuilt function to acces file system module
//write file(Syncronous)
/* fs.writeFileSync("test.txt","Hello Node js @025");//creating text.txt//string will store in test.txt file
console.log("File Writen")
//o/p:File Writen
fs.writeFileSync("../1.intro/test.txt","Hello Node js @025");//using this we cane cretae file for another folder
console.log("File Writen")//he we created one txt file on intro folder using code-modil folder fs.js
 */
//Read File.resd file syncronous

const data=fs.readFileSync("test.txt",{encoding:"utf-8"})//encoding will encode the buffer data
console.log("read syncronously",data)