import React from 'react'
import ComponentB from './ComponentB'

const ComponentA = () => {
    const data = []
    return (
        <div>
            <h1>I am in Component A</h1>
            <ComponentB data = {data}/>
        </div>
    )
}

export default ComponentA
