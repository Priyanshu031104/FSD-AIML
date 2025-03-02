import express from 'express';
const users =[{
    id: 1,
    name: "Mithun",
    email: "pandeymirtunjay@gmail.com"
}]
const app = express();
const port = 3000;
app.use(express.json()); // built in middleware

app.get("/", (req, res) => {
    res.send("Welcome to my API");
});

app.get("/getusers", (req, res) => {
    res.send(users);
});

app.get("/getusers/:id", (req, res) => {
    const {id} = req.params;
    const user = users.find(user=>user.id == id);
    res.send(user);
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