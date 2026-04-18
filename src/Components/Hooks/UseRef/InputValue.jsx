import React, { useRef } from 'react'

const InputValue = () => {
    let InputRef = useRef()
    let printRef = useRef()

    let handleInput = () => {
        // console.log(elem.current.value)
        let inputVal = InputRef.current.value;
        let h2Tag = printRef.current;
        h2Tag.innerText = inputVal;
    }
    return (
        <div>
            <h1>Input Value Example</h1>
            <input 
            type="text"
            ref={InputRef}
            placeholder='Enter Something.......'
            onChange={handleInput} />

            <h2 ref={printRef}></h2>
        </div>
    )
}

export default InputValue
