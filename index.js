const express = require('express')
const mongoose = require('mongoose')
const todoHandler = require('./routes/todohandler');
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



mongoose.connect( process.env.URI, { useNewUrlParser : true, useUnifiedTopology : true})
.then((res)=>console.log("connection successful"))
.catch(err=>console.log(err))

app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})

app.use('/todo',todoHandler);

app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))