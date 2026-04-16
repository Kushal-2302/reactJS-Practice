import React, { useState } from 'react'

const TogglePara = () => {
    let [bool, setBool] = useState(true)

    const handleClick = () =>{
        setBool(!bool)
    }
    return (
        <div className='hooks toggle-para'>
            <h1>Toggle Para</h1>
            <div className="container">
                <button onClick={handleClick}>
                    {bool ? 'Show Data ➕' : 'hide Data ❌'}
                </button>
                {
                    bool ? <></> : <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magni nesciunt officiis, 
                        aliquid tempora explicabo incidunt nihil enim reiciendis? Aliquam!</p>
                }
            </div>
        </div>
    )
}

export default TogglePara
