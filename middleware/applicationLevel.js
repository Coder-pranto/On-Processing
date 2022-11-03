const express = require('express')
const app = express()

const port = 8000

const logger = (req,res,next)=>{
    console.log(`${new Date(Date.now()).toLocaleString()} -${req.method}- ${req.originalUrl}`);
    next();
}

app.use(logger);

app.get('/about' , (req , res)=>{

   res.send('hello from simple server :)')

})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))

