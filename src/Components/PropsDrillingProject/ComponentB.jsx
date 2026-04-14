import React from 'react'
import ComponentC from './ComponentC'

const ComponentB = (props) => {
    let {user} = props;
    let user1 = {
        name : "kushal"
    }
    user.push(user1)
    return (
        <div>
            <h1>I am in Component B</h1>
            <ComponentC user1 = {user}/>
        </div>
    )
}

export default ComponentB
