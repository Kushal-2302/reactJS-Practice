import React, { useEffect, useState } from 'react'

const UseEffectExample = () => {
    let [count, setCount] = useState(0);

    let handleClick1 = () => {
        setCount(count+1)
    }
     let handleClick2 = () => {
        setCount(count-1)
    }


    let [msz, setMsz] = useState("Welcome")
    let handleClick = () => {
        setMsz("Good Bye")
    }

    // UseEffect()
    useEffect(()=>{
        alert("I am a Side effect")
    },[msz])
    return (
        <div>
            <h1>Use Effect Example</h1>
            <div className="counter-app">
                <button onClick={handleClick1}>Increment</button>
                <h2>{count}</h2>
                <button  onClick={handleClick2}>Decrement</button>
            </div>
            <h2>{msz}</h2>
            <button onClick={handleClick}>
                Click Here
            </button>
        </div>
    )
}

export default UseEffectExample
