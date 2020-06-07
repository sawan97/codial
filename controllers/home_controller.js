const Todo = require('../models/Todo');
var  todoList = [
        {
            description:"get vegetable",
            category:"Personal",
            date:"05/04/2020"
        },
        {
            description:"Do workout",
            category:"Work",
            date:"16/05/2020"
        }
    ]

module.exports.home = function(req,res){
    //fetch the content
    Todo.find({},function(err,data){
        if(err){
            console.log('error in fetching the data');
            return;
        }
        return res.render('home',{
            title: 'To Do List',
            todo_list:data
        }); 
    });
}


module.exports.delete = function(req,res){
    let id = req.query.id;

    //find the contact in the database and delete it

    Todo.findByIdAndDelete(id,function(err){
        if(err){
            console.log('error in deleting');
            return;
        }
        return res.redirect('back');
    });
}