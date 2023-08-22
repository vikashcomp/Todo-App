import React from 'react'
// import Todos from './Todos'

export const TodoItem =({todo,onDelete})=> {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button type="button" className='btn  btn-sm btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  );
}

export default TodoItem;

