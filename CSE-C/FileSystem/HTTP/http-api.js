//http module collects the data in chunk, but in express all the data goes in once and not in chunk
const http = require('http');
const axios = require('axios'); // Installed this third party package, this is the alternative to fetch
const port = 3000;
const server = http.createServer(async (req, res) => {
    res.writeHead(200, {'content-type' : 'text/html'});
    // const response = await fetch("https://dummyjson.com/products"); //asynchronous function, promise
    // const data = await response.json();
    const response = await axios.get("https://dummyjson.com/products"); //axios automatically converts the data to json, there is no need to again convert it in json like we did above.
    // const data = await response.json(); no need to do this if we are using axios
    // const adata = response.data;
    const allproducts = response.data.products;
    let frontend = `<html<head></head><body>`
    allproducts.forEach((product) => {
        frontend+=`<div><img src = ${product.thumbnail}></div>`
    });
    frontend+=`</body></html>`;
    // res.end(JSON.stringify(allproducts)); //end function do not take data this way, we need to convert it
    res.end(frontend);
});

server.listen(port, () => {
    console.log("Sever is running on the port "+ port);
});