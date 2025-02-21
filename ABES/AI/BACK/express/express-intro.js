// const express = require('express');
import express from 'express';
const app = express();
const port =3000;
app.get('/',(req,res) => {
    res.send("Welcome to Express")
});
// http://localhost:3000/api/priyanshu/9011
app.get('/api/:name/:rollno', (req,res) =>{
    try{
      const {name,rollno} = req.params;
      res.send(`Welcome ${name} and your roll no. is ${rollno}`);

    } catch (error) {
        console.log(`Error: ${error.message}`)
    }

});
//http://localhost:3000/api?name=rajesh&rollno=98
app.get('/api',(req,res) => {
    //const {name="Guest",rollno=100} = req.query;
    try{
        const {name,rollno} = req.query;
    if (!name){
        return res.status(400).send("Name is Required");
    }
    else{
        res.send(`Welcome to Abes: ${name} and Roll no. id ${rollno}`);
    }
    } catch (error) {
        console.log(`Error: ${error.message}`)
    }
    //console.log(data)
    //res.send(Welcome to Abes: ${name} and Roll no. id ${rollno})
});
app.listen(port, () => {
    console.log(`server is running on the port ${port}`);
});