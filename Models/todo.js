const mongoose = require('mongoose')

const todoSchema=new mongoose.Schema({
  content :{
    type : String,
    required : true

  },
  date : {
    type : Date,
    required : true
  }
})


module.exports =mongoose.model('Todo',todoSchema)