const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');
const path = require('path');
require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

//connect to the database
mongoose.connect("mongodb+srv://Sithembiso1370:13701370$Sm@cluster0.zp6da.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch(err => console.log(err));

//since mongoose promise is depreciated, we overide it with node's promise
mongoose.Promise = global.Promise;




// The code below helps us handle CORS related issues we might face if we try to access our api from a different dormain.
app.use((req,res,next)=> {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Alow-Headers","Origin, X-Requested-Width, Content-Type, Accept");
    next();
});


app.use(bodyParser.json());

app.use('/api', routes);

app.use((err, req, res, next) => {
    console.log(err);
    next();
});

app.listen(port,()=>{
    console.log(`Server Running on Port ${port}`)
});