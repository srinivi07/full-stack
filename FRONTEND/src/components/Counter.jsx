import React, {useState} from 'react'

const Counter = () => {
    const [count,setCount]=useState(0);
    const handleIncrement = ()=>{
      setCount(count+1)
    }
    const handleDecrement = ()=>{
    }
    const handleReset = ()=>{};
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={()=>setCount(0)}>Reset</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default Counter