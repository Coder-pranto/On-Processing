const express = require('express')
const app = express()
const adminRouter = express.Router();

const port = 8800

const logger = (req,res,next)=>{
    console.log(`${new Date(Date.now()).toLocaleString()} -${req.method}- ${req.originalUrl}`);
    throw new  Error("there was a server side error");
}

adminRouter.use(logger)

app.use('/admin',adminRouter);

adminRouter.get('/dashboard', (req, res) => {
    res.send('hello beautiful people')
});


app.get('/about' , (req , res)=>{

   res.send('hello from simple server :)')

})


//must use 4 parameter
 const errorHandleMiddleware = (err,req,res,next) =>{
    console.log(err.message);
    res.sendStatus(500)
   // res.status(500).send("server side error")
 } 

 adminRouter.use(errorHandleMiddleware)

app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))

