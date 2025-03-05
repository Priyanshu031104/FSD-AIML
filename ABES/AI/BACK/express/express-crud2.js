import express from 'express';
import fs from 'fs/promises'
const app = express();
const port = 3001;
// app.use(express.json()); // built in middleware

// app.get("/", (req, res) => {
//     res.send("Welcome to my  2nd API");
// });

app.get("/api", (req, res) => {
    const data = fs.readFile("./user.json", "utf-8");
    const user = JSON.parse(data);
    res.send(user)
})

app.get("/getusers", (req, res) => {
    res.send(users);
});

app.get("/getusers/:id", (req, res) => {
    const {id} = req.params;
    const user = users.find(user=>user.id == id);
    res.send(user);
});

app.patch("/api/updateUser/:id", (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    const index = users.findIndex(user => user.id == id);
    users[index].name = name
    res.send("User is updated successfully");
});

app.delete("/api/deleteUser/:id", (req, res) => {
    const {id} = req.params;
    const index = users.findIndex(user => user.id == id);
    users.splice(index, 1);
    res.send("User is updated successfully");
});

app.get("/api", (req, res) => {
    res.send("Welcome to my new API");
});

app.post("/api/users", (req, res) => {
    const bodydata = req.body;
    console.log(bodydata)
    res.send("Data Successfully Recevied");
});

app.post("/api/createusers", (req, res) => {
    const {name, email} = req.body;
    const newid=users.length>0? users[users.length-1].id +1: 1;
    users.push({id: newid, name, email})
    res.send("User Created Successfully");
});

app.listen(port, () => {
    console.log(`server is running on the port ${port}`);
});