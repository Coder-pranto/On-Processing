/* configurable middleware */

const express = require('express');
const app = express();
const adminRouter = express.Router();

const port = 8900;

const loggerwrapper = (option) => {
  return (req,res,next) => {
    if (option.log) {
      console.log(
        `${new Date(Date.now()).toLocaleString()} -${req.method}- ${
          req.originalUrl
        }`
      );
      next();
    } else {
      throw new Error('there was a server side error');
    }
  };
};

adminRouter.use(loggerwrapper({log:true})); // toggle kore dekho

app.use('/admin', adminRouter);

adminRouter.get('/dashboard', (req, res) => {
  res.send('dashboard');
});

app.get('/about', (req, res) => {
  res.send('simple server');
});

//must use 4 parameter
const errorHandleMiddleware = (err, req, res, next) => {
  console.log(err.message);
//   res.sendStatus(500);
   res.status(500).send("server side error")
};

adminRouter.use(errorHandleMiddleware);

app.listen(port, () =>
  console.log('> Server is up and running on port : ' + port)
);
