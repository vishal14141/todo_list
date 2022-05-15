//Getting mongoose library
const mongoose = require('mongoose');
//Connect to database
mongoose.connect('mongodb://localhost:27017/todo_db');

//Acquire the connection(to check if it is succeessful)
const db = mongoose.connection;

//Error
db.on('error', console.error.bind(console, "error connecting to db"));

//Up and running, then print the msg
db.once('open', function(){
    console.log("Successfully connected to database");
})