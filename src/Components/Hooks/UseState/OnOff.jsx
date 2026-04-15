import React, { useState } from 'react'

const OnOff = () => {
    let [bool, setBool] = useState(true)
    let handleClick = () => {
        setBool(!bool)
    }
    return (
        <div className=' hooks on-off'>
            <h1>On - Off Button</h1>
            <div className="container">
                <button className={bool ? "on" : "off"} title={bool ? "Welcome" : "Tata, Bye Bye"} onClick={handleClick}>
                    {bool ? "ON" : "OFF"}
                </button>
            </div>
        </div>
    )
}

export default OnOff
