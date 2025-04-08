const express = require('express'); //require links all the modules of expres to the current file
const app = express();
const path = require('path');
const port = 3000;

const adi = [{
    id:101,name:"deepak"
}]

//http methods - gte, post, put, delete
app.get('/', (req, res)=>{
    res.send("This is our home page");
})
app.get('/about', (req,res)=>{
    // res.send("This is my About page");
    //res.sendFile(path.join(__dirname, "home.html"))
    res.json(adi)
})
app.

app.listen(port, ()=>{
    console.log(`App is running at port ${port}`);
})