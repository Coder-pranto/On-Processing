const router = require('express').Router()
const TodoModel = require('../schemas/todoSchema');

//get all the TODOS
router.get('/' , async(req , res)=>{
   await TodoModel.find({status:"active"},(err,data)=>{
    if(err){
        res.status(500).json({error: "There was a server side error!"})
    }
    else{
        
        res.status(200).json({result: data})
    }
   }).clone().exec();
});

 
//get limited the TODOS (chain selection)
router.get('/limit' , async(req , res)=>{
   await TodoModel.find({status:"active"})
   .select({date: 0, _id:0})
   .limit(2)
   .exec((err,data)=>{
    if(err){
        res.status(500).json({error: "There was a server side error!"})
    }
    else{
        
        res.status(200).json({result: data})
    }
   });
});

// get a todo by id
router.get('/:id' , async(req , res)=>{
    await TodoModel.find({_id:req.params.id},(err,data)=>{
        if(err){
            res.status(500).json({error: "There was a server side error!"})
        }
        else{
            
            res.status(200).json({result: data})
        }
       }).clone().exec();
})

//post todo
router.post('/', async(req, res) => {
let newTodo = new TodoModel(req.body);
 await newTodo.save((err)=>{
    if(err){
        res.status(500).json({error: "There was a server side error!"})
    }
    else{
        res.status(200).json({message: "Todo was inserted successfully!"})
    }
})
});


// post multiple todo
router.post('/all', async(req, res) => {
  await TodoModel.insertMany(req.body,(err)=>{
    if(err){
        res.status(500).json({error: "There was a server side error!"})
    }
    else{
        res.status(200).json({message: "Todos were inserted successfully!"})
    }
  })
});

//update todo
router.put('/:id', async (req, res) => {
//    await TodoModel.updateOne({_id: req.params.id},{$set:{title:"test title just modified"}},(err)=>{
//     if(err){
//         res.status(500).json({error: "There was a server side error!"})
//     }
//     else{
//         res.status(200).json({message: "Todo was updated successfully!"})
//     }
//    }).clone().exec()
const result = await TodoModel.findByIdAndUpdate({_id: req.params.id},{$set:{status: "active"}},{new: true, useFindAndModify: false},
    (err)=>{
        if(err){
            res.status(500).json({error: "There was a server side error!"})
        }
        else{
            res.status(200).json({message: "Todo was updated successfully!"})
        }
       }).clone().exec()
       console.log(result);

});

//delete todo
router.delete('/:id', async(req, res) => {
    await TodoModel.deleteOne({_id:req.params.id},(err)=>{
        if(err){
            res.status(500).json({error: "There was a server side error!"})
        }
        else{
            
            res.status(200).json({message: "Todo was deleted successfully"})
        }
       }).clone().exec();
});



module.exports  = router;




 /* 
 
Mongoose no longer allows executing the same query object twice. If you do, you'll get a Query was already executed error. Executing the same query instance twice is typically indicative of mixing callbacks and promises, but if you need to execute the same query twice, you can call ".clone();" to clone the query and re-execute it.

.clone().exec()

 */