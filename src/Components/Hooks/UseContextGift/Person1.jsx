import React, { createContext } from 'react'
import Person2 from './Person2'

export const Gift = createContext()

const Person1 = () => {
    let mobile = {
        title : "Redmi",
        model : 13,
        imgUrl : "https://cdn.pixabay.com/photo/2020/03/16/11/07/xiaomi-4936657_1280.jpg",
        desc : "This Mobile is very Powerfull, It consist of 8gb RAM, 128gb storage, 120MP Camera"
    }
    return (
        <div>
            <h1 style={{color : 'red'}}>Person 1</h1>
            <Gift.Provider value={mobile}>
                <Person2/>
            </Gift.Provider>
            
        </div>
    )
}

export default Person1
