import React, { useState } from 'react'


const Theme = () => {
    let [bool, setBool ] = useState(true)
    let handleClick = () => {
        setBool(!bool)
        // if(bool){  //* This is the better aproach
        //     document.body.style.background = 'black'
        // } else {
        //      document.body.style.background = 'white'
        // }
    }
    return (
        <div style={bool ? {background : "lightgray"} : {background : "black", color:"white"}} className='hooks toggle-theme'>
            <h1>Toggle Theme</h1>
            <div className="container">
                <button style={bool ? {background : "black", color : "#fff"} : {background : "#fff", color:"black"}}   onClick={handleClick}>
                {bool ? "Day" : "Night"}
            </button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, autem.</p>
            </div>
        </div>
    )
}

export default Theme
