
// Models are defined using the Schema interface. The Schema allows you to define the fields stored in each document along with their 
// validation requirements and default values. In essence the Schema is a blueprint of how the database will be constructed. 
// In addition, you can define static and instance helper methods to make it easier to work with your data types, 
// and also virtual properties that you can use like any other field, but which aren’t actually stored in the database.
// To create a Schema and a model we need to install mongoose which is a node package that makes working with mongodb easier.

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create schema for each todo
const TodoSchema = new Schema({
    action: {
      type: String,
      required: [true, 'The todo text field is required']
    }
})

//create model for todo
const Todo = mongoose.model('todo', TodoSchema);

// Export the todo model
module.exports = Todo;