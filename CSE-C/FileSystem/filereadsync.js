const fs = require("fs");

// fs.writeFileSync("./data1.txt", "Hello ABES", "utf-8");
// fs.writeFileSync("./data1.txt", "Hello ABESEC", "utf-8");
// fs.appendFileSync("./data1.txt", " Students", "utf-8");
// fs.renameSync("./data2.txt", "./data3.txt")
// fs.unlinkSync("./data3.txt") //used for deletion of file, also ye rename command ke saath nahi chalegi


const data = fs.readFileSync("./data.txt", "utf-8"); //this is a module to read file synchronously
// console.log(data.toString()); if we do not give encoding type to read module then we use toString method.
console.log(data);
if(data.match("H")){
    console.log("File Contains H");
    const newdata = data.replace("H", "ABES");
    fs.writeFileSync("./data.txt", newdata, "utf-8");

}
