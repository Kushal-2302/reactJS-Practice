import React, { useState } from 'react'

const Task1 = () => {
    let [password, setPassword] = useState(false);

    const togglePassword = () =>{
        setPassword(!password);
    }
    return (
        <div>
            <h1>Task 1</h1>
            <input type={password ? "text" : "password"} placeholder='Enter Password'/>

            <button onClick={togglePassword}>
                {password ? "Hide Password" : "Show Password"}
            </button>
        </div>
    )
}

export default Task1
