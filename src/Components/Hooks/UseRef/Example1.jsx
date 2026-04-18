import React, { useRef } from 'react'

const Example1 = () => {
    let elem = useRef()

    let handleClick = () => {
        let tag = elem.current;
        tag.innerText = 'JavaScript'
    }
    return (
        <div>
            <h1>Use Ref Example</h1>

            <h2 ref={elem}>Welcome</h2>

            <button onClick={handleClick}>
                Click here
            </button>
        </div>
    )
}

export default Example1
