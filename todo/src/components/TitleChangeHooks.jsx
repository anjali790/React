import React, {useState, useEffect} from 'react'

export function TitleChangeHooks() {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        document.title = `${count} times clicked`
    })
  return (
    <>
    {/* <p>count {count}</p> */}
    <button onClick = {()=> setCount(count+1)}>Count - {count}</button>
    </>
    )
}
