import React from 'react'
import ComponentC from './ComponentC'

const ComponentB = ({data}) => {
    const newData = [...data , {id : 1, name : "kushal"}]
    return (
        <div>
            <h1>I am in Component B</h1>
            <ComponentC data = {newData}/>
        </div>
    )
}

export default ComponentB
