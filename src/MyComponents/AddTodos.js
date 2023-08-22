import React, { useState } from 'react';

const AddTodos = ({addTodo}) => {
    const[title,setTitle]=useState("");
    const[desc,setDesc]=useState("");
    const submit=(e)=>{
     e.preventDefault()
        if(!title||!desc){
            alert("Title or description can not be blank")
        }else{
       addTodo(title,desc);
        setTitle("");
        setDesc("");
        }
    
    }
  return (
    
    <div className='container my-3'>
        <h3>Add  a Todo</h3>

        <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo Title</label>
    <input type="text"  value={title}  onChange={(e)=>{setTitle(e.target.value)}}className="form-control" id="title" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text"></div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Todo Desciption</label>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-sm btn-primary">Add Todo</button>
</form>
      
    </div>
  )
}

export default AddTodos;
