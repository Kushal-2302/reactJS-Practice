import React, { useState } from 'react'

const UpdateName = () => {
    let [name, setName] = useState('JavaScript');

    let handleupdate = () =>{
        setName(<span style={{color:"red"}}>React</span>)
    }
    return (
        <div className='hooks update-name'>
            <h1>Update Hooks</h1>
            <div className="container">
                <h2>I Love {name}</h2>
                <button onClick={handleupdate}>
                    Click Here
                </button>
            </div>
        </div>
    )
}

export default UpdateName
