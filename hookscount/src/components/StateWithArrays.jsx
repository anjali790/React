import React, { useState } from 'react'

export function StateWithArrays() {
  const [items, setItems] = useState([]);
  const [fruit, setFruit] = useState('');

  const addItem = () => {
    setItems([...items, fruit]);
    setFruit('');
  }
  
  return (
    <>
      <input type="text" placeholder='enter todo here' value={fruit} onChange={(e) => setFruit(e.target.value)}></input>
      <button onClick={addItem}>Add items</button>
      {items.map(item =>
        <>
          <div>
            <span>{item}</span>
            <button>Edit</button>
            <button onClick={()=>{
              let filteredItems = items.filter((value) => value !== item);
              setItems([...filteredItems]);
            }}>Delete</button>
          </div>
        </>
      )}


    </>
  )
}
