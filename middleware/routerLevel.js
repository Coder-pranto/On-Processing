const express = require('express')
const app = express()
const adminRouter = express.Router();

const port = 8500

const logger = (req,res,next)=>{
    console.log(`${new Date(Date.now()).toLocaleString()} -${req.method}- ${req.originalUrl}`);
    next();
}

adminRouter.use(logger)

app.use('/admin',adminRouter);

adminRouter.get('/dashboard', (req, res) => {
    res.send('hello beautiful people')
});


app.get('/about' , (req , res)=>{

   res.send('hello from simple server :)')

})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))

