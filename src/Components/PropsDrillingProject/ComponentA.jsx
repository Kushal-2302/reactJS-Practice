import React from 'react'
import ComponentB from './ComponentB'

const ComponentA = () => {
    let user = []
    return (
        <div>
            <h1>I am in Component A</h1>
            <ComponentB user1 = {user}/>
        </div>
    )
}

export default ComponentA
