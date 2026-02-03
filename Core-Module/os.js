//---OS---//
//it complete relates os Detsils

const os=require('os');

//1.get the OS platfom name
console.log("plathform name:",os.platform());
/* plathform name: win32 */

//2.To get Architecture name
console.log("Architecture name",os.arch())
/* Architecture name x64 */

//3.ram details
//3.1 ram tot memory
console.log("total memmory",os.totalmem());
/* total memmory 8268771328 */

//4.it show in gb formate
console.log("Display in gb",Math.round(os.totalmem()/1024**3),'gb')
/* Display in gb 8 gb */

//5.to get how frememory is currently
console.log("Freee memory",Math.round(os.freemem()/1024**3),'gb')
/* Freee memory 2 gb */

//6.to get OS homedirectry
console.log("Home Directry:",os.homedir());
/* Home Directry: C:\Users\DINESH T */

//7.to get how many cpu core is there
console.log("CPU Cores",os.cpus().length)
/* CPU Cores 8 */

//8.OS Uptime:How many duration its run
console.log("Running time",os.uptime())
/* Running time 440722.625 */