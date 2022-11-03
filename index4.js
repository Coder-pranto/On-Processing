const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 9000


app.set('view engine', 'ejs')


/* res.locals */
// data o pathano jabe render korar somoy
app.get('/contact' , (req , res)=>{

  console.log(res.headersSent);//false, ekhono send hoini vhai

  res.render('pages/contact',{
    name: "riaj hasan pranto",
    age:23,
  })

  console.log(res.headersSent);//true, send hoise vhai

})


// app.get('/', (req, res) => {
//     res.send("hello world"); // send response with data
//     res.end() // end response without data
//     // ei duita ekshathe use kora jabe na, jekono ekta use korte hobe

// });
app.get('/jsonType', (req, res) => {
   
    res.json({
        name:"pranto",
        dept: "cse"
    }) // eta eki shathe header e content-type o change kore (application/json) kore dey

    // res.status(200); // eta execute hoyeo end hoy na tai MUST er shathe res.end() use korte hoy
    // res.end();
    res.status(200).end()
    // otherwise res.sendStatus()
   
});


/* status vs sendStatus 

status() sets a HTTP status on the response (as a Javascript object on the server side).

sendStatus() sets the status and sends it to the client.

*/

// app.get('path', (req, res) => {
//  res.sendStatus(200); // equivalent to res.status(200).send('OK')
// res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')
// res.sendStatus(404); // equivalent to res.status(404).send('Not Found')
// res.sendStatus(500); // equivalent to res.status(500).send('Internal Server Error')
// });


app.get('/format', (req, res) => {
    res.format({
        'text/plain': function () {
          res.send('hey')
        },
      
        'text/html': function () {
         // res.send('<p>hey</p>')
         //or
         res.render('/pages/about')
        },
      
        'application/json': function () {
          res.send({ message: 'hey' })
        },
      
        default: function () {
          // log the request and respond with 406
          res.status(406).send('Not Acceptable')
        }
      })
});


app.get('/cookie' , (req , res)=>{

   res.cookie('name','pranto',{path:'/cookie'})
   res.cookie('title','prasplay')
   res.cookie('id','345').end() // res.end() must

})


//res.redirect()


app.get('/admin', (req, res) => {
    res.send("hello")
});

app.get('/userx', (req, res) => {
    res.redirect('/admin')
    res.end()
});


app.get('/setter', (req, res) => {
    res.set("platform", "windows")
    console.log( res.get("platform"))
    res.end()
});


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))