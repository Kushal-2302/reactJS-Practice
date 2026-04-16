import React, { useState } from 'react'
import Card from './Card'

const ToggleCard = () => {
    let [bool, setBool] = useState(true)
    let handleClick = () => {
        setBool(!bool)
    }
    return (
        <div className='hooks toggle-card'>
            <h1>Toggle Card</h1> 
           <div className="container">
             <button onClick={handleClick}>
                {bool ? 'Show Card ➕' : 'hide Card ❌'}
            </button>
            {
                bool ? <></> : <Card />
            }
           </div>
        </div>
    )
}

export default ToggleCard
