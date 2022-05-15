const Todo = require('../models/todo');

module.exports.save = function(req,res){

    Todo.create({
        description : req.body.description,
        category: req.body.category,
        lastdate : req.body.lastdate,
        status : 'In Progress'
    },function(err, newTodo){
        if(err){
            console.log("Error in creating contact");
            return ;
        }
        console.log("***************" , newTodo);
        return res.redirect('back');
    });

};

module.exports.delete = function(req, res){

    Todo.deleteOne({_id: req.query.id}, function(err){
        if(err){
            console.log("Error in deleting the contact");
            return res.redirect('back');
        }
        console.log("Successfully deleted contact");
        return res.redirect('back');
     })
}

module.exports.finish = function(req,res){

    Todo.findByIdAndUpdate({_id: req.query.id},{status: 'Finished' } ,function(err, updatedTodo){
        if(err){
            console.log(`Something went wrong: ${err}`);
            return res.redirect('back');
        }
        console.log(`Status successfully changed: ${updatedTodo}`);
        return res.redirect('back');
    })
}