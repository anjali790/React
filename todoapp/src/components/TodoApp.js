import React, { useState } from 'react';
import './TodoApp.css';

export default function TodoApp() {
  const [task, setTask] = useState([]);
  const [todo, setTodo] = useState('');

  const addItem = () => {
    setTask([...task, todo]);
    setTodo('');
  };

  return (
    <div className='container'>
      <h1>Todo App</h1>
      <input className='inputBox' type="text" placeholder='enter todo here' value={todo} onChange={(e) => setTodo(e.target.value)}></input>
      <button className='addBtn' onClick={addItem}>Add Todo</button>
      {task.map(item =>
        <>
          <div className='addTodoDiv'>
            <p className='newTodo'>{task}</p>
            <button className='editBtn'>Edit</button>
            <button className='deleteBtn' onClick={() => {
              let filteredItems = task.filter((value) => value !== item);
              setTask([...filteredItems]);
            }}>Delete</button>
          </div>
        </>
      )}
    </div>
  )
}