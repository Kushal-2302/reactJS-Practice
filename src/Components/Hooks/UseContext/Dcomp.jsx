import React, { useContext } from 'react'
import { Fname, Lname } from './Acomp'

const Dcomp = () => {

    let fnm = useContext(Fname)
    let lnm = useContext(Lname)

    return (
        <div>
            <h1>Component D</h1>
            <h3>{fnm} {lnm}</h3>
        </div>
    )
}

export default Dcomp
