const http = require('http');
const fs = require('fs/promises');
const port = 3000;

//We created the server here
const server = http.createServer(async (req, res) => {
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');

    res.writeHead(200, {'Content-Type' : 'text/html'}); //here we merged the above two lines into one

    // res.write("Hello Everyone!");
    const readdata = await fs.readFile("./home.html", 'utf-8');
    res.end(readdata); //alternative to res.write
}); 

// If we change a little on our page then everytime we have to restart our server. So to avoid this instead of running node http-plain.js command we will run node --watch http-plain.js. This will continue to update our application whenever we change anything on our page
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});