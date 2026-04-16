import React, { useState } from 'react'

const ThemeBody = () => {
    let [bool, setBool] = useState(true);
    let handleClick = () => {
        setBool(!bool)
        if(bool){  //* This is the better aproach
            document.body.style.background = 'black'
        } else {
             document.body.style.background = 'white'
        }
    }
    return (
        <div className='hooks toggle-theme-body'>
            <h1>Toggle Body Theme</h1>
            <div className="container">
                <button onClick={handleClick} className={bool ? 'left' : 'right'}>
                    {bool ? '☀️' : '🌑'}
                </button>
            </div>
            
        </div>
    )
}

export default ThemeBody
