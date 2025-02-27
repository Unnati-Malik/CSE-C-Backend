// const express = require('express'); // old way of importing
//      OR
import express from 'express';
const app = express(); // now this app is our server
const port = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to CSE-C");
});
app.get("/about", (req, res) => {
    res.send("Welcome to About Page");
});

// http://localhost:3000/api/rahul/9999
app.get("/api/:name/:rollno", (req, res)=>{
    try {
        const data = req.params;
        res.send(`Welcome ${data.name} and your roll no is ${data.rollno}`);
    } catch (error) {
        console.log("Error : ", error.message);
    }
});

// http://localhost:3000/api?name=Rahul&rollno=20
app.get("/api", (req, res) => {
    try {
        const{name, rollno} = req.query;
        if(!name){
            // res.send({status: 404, message: "Please enter a name"});
            // OR
            res.status(404).send("Please enter a name")
        }else{
            res.send(`Welcome ${name} and your roll no is ${rollno}`);
        }
        // const data = req.query;
        //    OR 
        // const{name="Guest", rollno=100} = req.query; // object destructing || Passing the default values in name and rollno
        
    } catch (error) {
        console.log(error.message);
    }
});

app.listen(port, () => {
    console.log("Server ruuning at port : "+ port);
});
