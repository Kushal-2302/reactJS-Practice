import React from 'react'
import Child from './Child'

const Parent = () => {
    let fname = "kushal";
    let num = 100;
    return (
        <div>
            <h1>I am in Parent Component</h1>
            <Child count={num} user={fname}/>
        </div>
    )
}

export default Parent
