// const Todo = require('../models/todo');
const mode = require('./home_controller');

module.exports.home = function(req,res){
    mode.add(req,res);
    // Todo.create({
    //     description: req.body.description,
    //     category: req.body.category,
    //     date: req.body.date
    // },function(err,newTodo){
    //     if(err){
    //         console.log('error in creating the schema');
    //         return;
    //     }
    //     console.log('***',newTodo);
    // });
    return res.redirect('back');
}

