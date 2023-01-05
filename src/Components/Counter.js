import React, {useState} from 'react'

export default function Counter() {

    const [state, setstate]= useState(0)

    const addition=()=>{
        return setstate(state+1)
    }

    const subtraction=()=>{
        return setstate(state-1)
    }
    console.log(state)

  return (
    <div>
    <h1>{state}</h1>
    <button onClick={addition}>+</button>
    <button onClick={subtraction}>-</button>
    </div>
  )
}
