import React from 'react'
import ComponentD from './ComponentD'

const ComponentC = ({data}) => {
    const newData = [...data , {id : 2 , name : "kumar"}]
    return (
        <div>
            <h1>I am in Component C</h1>
            <ComponentD data = {newData}/>
        </div>
    )
}

export default ComponentC
