import React, { useState } from 'react';
import './TodoApp.css';

export default function TodoApp() {
  const [items, setItems] = useState([]);
  const [todo, setTodo] = useState('');
  // const [edit, setEdit] = useState(null);

  const addItem = () => {
    setItems([...items, todo]);
    setTodo('');
  };

  return (
    <div className='container'>
      <h1>Todo App</h1>
      <input className='inputBox' type="text" placeholder='enter todo here' value={todo} onChange={(e) => setTodo(e.target.value)}></input>
      <button className='addBtn' onClick={addItem}>Add Todo</button>
      {items.map(item =>
        <>
          <div className='addTodoDiv'>
            <span className='newTodo'>{item}</span>
            <button className='editBtn'>Edit</button>
            <button className='deleteBtn' onClick={() => {
              let filteredItems = items.filter((value) => value !== item);
              setItems([...filteredItems]);
            }}>Delete</button>
          </div>
        </>
      )}
    </div>
  )
}