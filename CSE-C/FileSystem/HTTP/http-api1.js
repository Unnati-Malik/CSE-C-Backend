const http = require('http');
const axios = require('axios');
const port = 3000;
const server = http.createServer(async (req, res) => {
    res.writeHead(200, {'content-type' : 'text/html'});
    const response = await axios.get("https://api.github.com/users");
    const allusers = response.data;
    let frontend =`<html><head></head><body>`;
    allusers.forEach((user) => {
        frontend+=`<div><img src = ${user.avatar_url}></div>`;
    });
    frontend+=`</body></html>`
    res.end(frontend);
});

server.listen(port, () => {
    console.log("Listening on the port " + port);
});