"use client"
import React,{useState} from 'react'

const Counter = () => {

const [counter, setCounter] = useState(0)
  return (
    <div>
        <p>Counter is {counter}
        <button onClick={()=>setCounter(counter+1)}>Increment</button>
        </p></div>
  )
}

export default Counter