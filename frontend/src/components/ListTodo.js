import React from 'react';

const ListTodo = ({ todos, deleteTodo }) => {


    { todos  > 0 ? (todos.map(todo => {return ( deleteTodo(todo._id)}>{todo.action})})):(* No todo(s) left)}

}

export default ListTodo