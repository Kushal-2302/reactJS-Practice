import React, { createContext } from 'react'
import Bcomp from './Bcomp'
import Dcomp from './Dcomp'

export const Fname = createContext();
export const Lname = createContext();

const Acomp = () => {
    return (
        <div>
            <h1>Component A</h1>
            <Fname.Provider value="Kushal">
                <Lname.Provider value="kumar">
                    <Bcomp/>
                </Lname.Provider>
            </Fname.Provider>
        </div>
    )
}

export default Acomp
