const express = require('express');
const app = express();
const PORT = 4000;
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(express.json())
   
app.get('/', function (req, res) {
   
    res.send("hello world")
    console.log(req.body) // body te json akare kisu likhe aso
    console.log(req.cookies) //header e giye header (cookie) the value (pranto = 345)
});
   


/* req.app */

const handler = require('./handler.js');
app.set('view engine','ejs');

app.get('/user' , handler)

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});