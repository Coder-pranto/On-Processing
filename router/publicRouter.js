const express = require('express');
const { param } = require('./adminRouter');
const publicRouter = express.Router();


const log =(req,res,next)=>{
    console.log('I am logging something');
    next()
}

publicRouter.all('*',log);


publicRouter.get('/', (req, res) => {
  res.send('home');
});

publicRouter.get('/user',(req,res) =>{
    res.send('user');
})


publicRouter.param('roll',(req,res,next,id)=>{
    req.roll = id === '1' ? 'Admin' : 'Anonymous'
    next();
})

publicRouter.get('/std/:roll', (req, res) => {
     res.send(`hello ${req.roll}`);
});


//
publicRouter.param((param,option) =>(req,res,next,val)=>{
    if(val === option) next();
    else res.sendStatus(403);
})

publicRouter.param('roll','34');

publicRouter.get('/stdinfo/:roll', (req, res) => {
    res.send("you r the lucky student");
});



module.exports = publicRouter;