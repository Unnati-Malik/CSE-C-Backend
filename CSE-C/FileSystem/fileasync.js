//fastest, easiest and we should always use this asynchronous file system
const fspromise = require('fs').promises; // OR const fspromise = require('fs/promises'); This is promises version of file system

// const read = () => {
//     const data = fspromise.readFile("./data.txt", "utf-8"); // Function name for promises and callback is same i.e readFile
//     console.log(data);
// }
const read = async () => {
    try {
        const data = await fspromise.readFile("./data.txt", "utf-8"); // Function name for promises and callback is same i.e readFile
    console.log(data);
    } catch (error) {
        console.log(error.msg);
    }
}

const write = async () => {
    await fspromise.writeFile("./data2.txt", "My name is UM", "utf-8");
}

read();
write();

console.log("1st");
console.log("2nd");
console.log("3rd");
console.log("4th");

// Whenever we call api it do not give data directly , it give promise
// default state of promise is pending
// other promise is .then and async-await
module.exports = read;