
const express = require('express')
const app = express()
const cookieParser = require('cookie-parser');
const port = 8700


app.use(cookieParser());
app.use(express.json())

app.get('/about' , (req , res)=>{

   res.send("hello world")
   console.log(req.body) // body te json akare kisu likhe aso
   console.log(req.cookies)//header e giye header (cookie) the value (pranto = 345)
})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))


