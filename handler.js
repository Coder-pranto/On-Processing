module.exports = (req , res)=>{

    res.send("it is hollywood")
    console.log(req.app.get('view engine'));
 
 };