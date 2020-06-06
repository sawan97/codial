const express = require('express');
const app = express();
const port = 8000;

//set view engine
app.set('view engine','ejs');
app.set('views','./views');

//set middleware
app.use(express.urlencoded());

app.use(express.static('assets'));

//use express router
app.use('/',require('./routes/index'));


app.listen(port,function(err){
    if(err){
        console.log(`error in running the server: ${err}`);
    }
    console.log(`server is running on port: ${port}`);
});
