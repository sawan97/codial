// require the library
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/todo_list_db');

//aquire the connection to verify the connection
const db = mongoose.connection;

//print if any error
db.on('error', console.error.bind(console,'error connecting to the database'));

//if up and running then print
db.once('open', function(){
    console.log('succesfully connected to the database');
});

