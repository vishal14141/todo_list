const Todo = require('../models/todo');

module.exports.save = function(req,res){

    Todo.create({
        description : req.body.description,
        category: req.body.category,
        lastdate : req.body.lastdate
    },function(err, newTodo){
        if(err){
            console.log("Error in creating contact");
            return ;
        }
        console.log("***************" , newTodo);
        return res.redirect('back');
    });

};

module.exports.delete = function(){

}