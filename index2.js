const express = require('express');
const app = express()
const port =  7000


/* 

app.set()
app.get()

*/
 
// app.get('/' , (req , res)=>{
//    res.send('hello from simple server :)')
// })

// app.set('position', 'vertical');
// console.log(app.get('position'))



/* app.enable()
   app.disable()

 */

//   app.enable("vhai route ta ekhn case sensitive ")
//  app.disable("case sensitive routing ")
//    app.all('/about', (req, res) => {
//         res.send("hola");
//    });

/* 
app.param()
 */

// app.param('id',(req,res,next,id)=>{
//     const user ={
//         name:"Faisal",
//         userId: id 
//     }

//     req.userDetails = user

//     next()
// })

// app.get('/user/:id', (req, res) => {
    
//     res.send(req.userDetails);
//     console.log(req.userDetails);
// });

/* app.path() */

// var blog = express()
// var blogAdmin = express()

// app.use('/blog', blog)
// blog.use('/admin', blogAdmin)

// console.dir(app.path()) // ''
// console.dir(blog.path()) // '/blog'
// console.dir(blogAdmin.path())


/* app.route */


/* template engine */


// app.set('view engine' , 'ejs');

// app.get('/mission', (req, res) => {
//     res.render('pages/about');
// });


app.listen(port , ()=> console.log('> Server IS up and running on port : ' + port))
