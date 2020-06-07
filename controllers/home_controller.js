// const Todo = require('../models/todo');
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
         return res.render('home',{
        title: 'To Do List',
        todo_list:todoList
    });    
}

module.exports.add = function(req,res){
    return todoList.push(req.body);
}
module.exports.delete = function(req,res){
    console.log(req.query.description);
    let description = req.query.description;

    let listIndex = todoList.findIndex(data => data.description == description);
    
    if(listIndex!=-1){
        console.log(listIndex);
        todoList.splice(listIndex ,1);
    }
    return res.redirect('back');
}