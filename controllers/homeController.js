const db = require('../config/mongoose');
const Todo = require('../models/todo');

module.exports.home = function(req,res){

    Todo.find({}, function(err, contacts){
        if(err){
            console.log("Error in creating contact");
            return ;
        }
        return res.render('home', {
            title: "ToDo",
            contacts : contacts
        });;
    })
    
}