const express = require('express')
const adminRouter = require('./adminRouter');
const publicRouter = require('./publicRouter');
const app = express()
const port = 8888;

app.use('/admin',adminRouter);
app.use('/public',publicRouter);


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))