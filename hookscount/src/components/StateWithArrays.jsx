import React, {useState} from 'react'

export function StateWithArrays() {
    const [items, setItems] = useState(['apple', 'banana', 'orange']);
    const [fruit, setFruit] = useState('tomato');

    let addItem = ()=>{
       setItems([...items, fruit]);
    }


  return (
   <>
   <input type="text" value={fruit} onChange={(e)=> setFruit(e.target.value)}></input>
   <button onClick={addItem}>Add items</button>
    {items.map(item => <p>{item}</p>)}
    
   </>
  )
}
