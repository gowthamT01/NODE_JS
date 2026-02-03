const path=require("path");
//1.
const filePath="Users/DINESH T/Desktop/Node_js/path.js";
//it help to get the base name of the path,here base name is appendFile.js
console.log("Basename:",path.basename(filePath));
/* Basename: path.js */


//2.Basename: path.js
console.log("Direrctry name:", path.dirname(filePath))
/* Direrctry name: Users/DINESH T/Desktop/Node_js */


//3.it will return the extention name 
console.log("Extention name:",path.extname(filePath))
/* Extention name: .js */


//4.test.txt file full path
//it give corrent executing path
console.log(__dirname);//C:\Users\DINESH T\Desktop\Node_js\Core-Module

//5.0 JOINING Path
//5.1joining path
console.log("Joinedpath:",__dirname+'\\test.text')
/* //Joinedpath: c:\Users\DINESH T\Desktop\Node_js\Core-Module\test.text */

//5.2//here join path but only in windows supoprt
console.log("Joinedpath:",__dirname+'\\demo\\test.text');
/* Joinedpath: C:\Users\DINESH T\Desktop\Node_js\Core-Module\demo\test.text */


/*5.3 <-- Both not some but bilow method give out put in both linux and windows-->
 */
//here join metho use for face problem from linux vs window integration problem

console.log("Joined path:",path.join(__dirname,"demo","text.txt"))//here demo is folder name
/* Joined path: C:\Users\DINESH T\Desktop\Node_js\Core-Module\demo\text.txt */





