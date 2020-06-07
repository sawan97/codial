const Todo = require('../models/Todo');
// const mode = require('./home_controller');

module.exports.home = function(req,res){
    Todo.create({
        description:req.body.description,
        category:req.body.category,
        date:req.body.date
    },function(err,newTodo){
        if(err){
            console.log('error in creating the todo');
            return;
        }
        return res.redirect('back');
    });
}

