const express = require('express');
const adminRouter = express.Router();

adminRouter.get('/', (req, res) => {
  res.send('dashboard');
});

adminRouter.get('/login', (req, res) => {
  res.send('login');
});


adminRouter.route('/signUp')
           .all((req,res,next)=>{
            console.log('i m logging something')
            next()
           })
           .get((req,res)=>{
            res.send("GET")
           })
           .put((req,res)=>{
            res.send("PUT")
           })
           .post((req,res)=>{
            res.send("POST")
           })
           .all((req,res)=>{
            res.send("unkonwn method")
           })

module.exports = adminRouter;
