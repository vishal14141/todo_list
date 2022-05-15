const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');

const db = require('./config/mongoose');

//For accessing Todo Schema
const Todo = require('./models/todo');

//Setting path for static files
app.use(express.static('assets'));
app.use(bodyParser.urlencoded({extended : false}));
// Setting up routes path
app.use('/', require('./routes'));

//Setting up view engine and view
app.set('view engine', 'ejs');
app.set('views', './views');



app.listen(port, function(err){
    if(err){
        console.log(`Error running server on port: ${port}`);
    }
    console.log(`Server is successfully running on port ${port}`);
})