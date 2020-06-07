const mongoose = require('mongoose');

//schema
const todoSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:Number,
        required:true
    }
});

//name of the collection using the schema
const Todo = mongoose.model('Todo',todoSchema);
module.exports = Todo;