import express from 'express';
const app = express();
const port = 3000;

const users = [{
    id: 1,
    name: 'Unnati',
    age: 21
}];

app.get('/', (req, res)=>{
    res.send(users); //automatically express isko string mein convert kr deta hai, pr http mein humko stringify krna pdta tha. So this is advantage of express
})

app.use(express.text()); //this is my built in middleware, order of middleware is very important. This is used for parsing the data coming from client from the body.
// Agar hum json type ka data bhej rhe hote toh hum likhte -> app.use(express.json()); 
app.post('/', (req, res)=>{
    const bodydata = req.body;
    console.log(bodydata); //yahan pr inbuilt middleware use hoga because jo data aa rha hai woh parse nhi ho pa rha
    res.send("Data is received Successfully!");
})

//CRUD OPERATIONS START

// C -> CREATE
app.post('/api/users', (req, res)=>{
    const newid = users.length>0 ? users[users.length-1].id+1 : 1; //id hum server se hi krva rhe hai user se nhi le rhe
    // const bodydata = req.body;
    const {name, age} = req.body;
    users.push({id: newid, name, age}); // yha jb data push hoga toh id mein newid as a key chali jayegi
    users.push(bodydata);
    res.send("New user is created Successfully!");
})

// R -> READ
app.get('/api/users/:id', (req, res)=>{
    const{id} = req.params;
    const user = users.find(user => user.id == id);
    res.send(user);
})

//U -> UPDATE
app.patch('/api/updateuser/:id', (req, res)=>{
    const{id} = req.params; //getting id from parameters
    const{name} = req.body; //gettting data from client
    const index = users.findIndex(user => user.id == id); //index to be updated
    users[index].name = name;
    res.send("user is updated successfully!");
})

//D -> DELETE
app.delete('/api/deleteuser/:id', (req, res)=>{
    const{id} = req.params; //getting id from parameters
    const index = users.findIndex(user => user.id == id); //index to be updated
    users.splice(index, 1)
    res.send("user is deleted successfully!");
})

app.listen(port, ()=>{
    console.log("Server is running at port: "+ port);
})