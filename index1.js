const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000


/* Express built in module : first change content-type in header then give the body data with regarder content-type */

// app.use(express.json());
// app.post('/', (req, res) => {
//     console.log(req.body)
//     res.send('i m post method')
// });

// app.use(express.raw());
// app.post('/', (req, res) => {
//     console.log(req.body.toString())
//     console.log(req.body)
//     res.send('i m post method')
// });

// app.use(express.text());
// app.post('/', (req, res) => {
//     console.log(req.body)
//     res.send('i m post method')
// });

// app.use(express.urlencoded());
// app.post('/', (req, res) => {
//     console.log(req.body)
//     res.send('i m post method')
// });


app.use(express.static(`${__dirname}/public/`))
//http://localhost:5000/text/someText.txt 


app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))