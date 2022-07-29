// We want to achieve three things with our todo app, which is to create a task, view all task and to delete a completed task. 
// For this, we need to create routes which will define various endpoints that the todo app will depend on. 
// So let’s create a folder routes and create a file api.*_js *_with the following code in it.

const express = require('express');
const router = express.Router();
// Having created our model we need to update our routes to make use of the new model.
const Todo = require('../models/todo');

router.get('/todos',(req,res,next) => {
  //this will return all the data, exposing only the id and action field to the client
  Todo.find({}, 'action')
    .then(data => res.json(data))
    .catch(next)
});

router.post('/todos',(req,res,next) => {
    if(req.body.action){
        Todo.create(req.body)
          .then(data => res.json(data))
          .catch(next)
      }else {
        res.json({
          error: "The input field is empty"
        })
      }
});

router.delete('/todos/:id',(req,res,next) => {
    Todo.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
});

module.exports = router;