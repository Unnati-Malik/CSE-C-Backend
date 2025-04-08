const http = require('http'); //http is a base. Interview mein bola jayega ki http page create kro
const users = [
    {id: 1, name: "Rahul", email: "rahul@example.com"},
    {id: 2, name: "Raj", email: "raj@example.com"},
    {id: 3, name: "Ramesh", email: "ramesh@example.com"}
] //key value pair in an array
const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type" : "application/json"});
    // res.end(users);
    // // res.end(JSON.stringify(users));  // String -> Object = JSON.stringify() and Object -> String = JSON.parse()
    // // res.end(JSON.stringify(users[1]));
    // const namedata = users.map((user) => {
    //     return user.name;
    // })
    // res.end(JSON.stringify(namedata));
});
const port = 3000;




server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
