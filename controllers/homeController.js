const db = require('../config/mongoose');
const Todo = require('../models/todo');

module.exports.home = function(req,res){
    return res.render('home', {
        title: "ToDo"
    });;
}