const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());


// const todoModel = require('./Models/todo')
// const todo = require('./Models/todo')

mongoose.connect('mongodb://127.0.0.1:27017/meanstackproject');


const todoRoutes = require('./Routes/todo');
app.use('/todo',todoRoutes);//maaneha i5dem bihom les chemins



//connex a la BD 
//mongoose.connect('mongodb://127.0.0.1:27017/meanstackproject',{useNewUrlParser:true})

const db  =mongoose.connection
db.once('open',()=>{
  console.log("data base connnnected")
})

db.once('error',(err)=>{
  console.log("data base error",err)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


















//get : ml base ll user
// app.get('/todo/lister', (req, res) => {

//   todoModel.find({}).exec((error,listTodo)=>{
//     try {
//       res.status(200).json({ listTodo});
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     }

//   })
// })







/*app.get('/todo/ajouter', (req, res) => {
  const todoObj={
    content :" tache 1",
    date:"02-12-2011"
  }
  const Todo = new todoModel(todoObj);

  Todo.save((error,createdTodo)=>{
    todoModel
    }
  });//impoooortaaannnt

 // res.send("todo ajouter"); 


});*/








// app.get('/todo/:id/supprimer', async(req, res) => {// el : bech yaaref li hiya chtetbadel

//   const id = req.params.id;//.id == :id nafs l ism

//   todoModel.findByIdAndDelete(id).exec((error,todo)=>
//   {
//     if(error) return res.status(400).json({error})
//     if(todo){return res.status(200).json({"message " : "todos supprimer succee ..!"})}
//   })
 
//   // res.send('LE CORPS DE FN TODO supprimer')
// })






