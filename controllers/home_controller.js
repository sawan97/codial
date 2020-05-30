var todoList = [
    {
        description:"get vegetable",
        category:"Personnel",
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


