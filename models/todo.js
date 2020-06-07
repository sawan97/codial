const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    description: {
        type:String,
        required:true
    },
    category: {
        type:String,
        required:true
    },
    date: {
        type:String,
        required:true
    }
});

//name of the collection using the schema
const Todo = mongoose.model('Todo',todoSchema);

module.exports = Todo;