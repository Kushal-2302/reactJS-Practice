import React from 'react'
import CompB from './CompB'

const CompA = () => {
    let num = 100;
    console.log(num)
    return (
        <div>
            <h1>Component A</h1>
            <CompB num = {num}/>
        </div>
    )
}

export default CompA
