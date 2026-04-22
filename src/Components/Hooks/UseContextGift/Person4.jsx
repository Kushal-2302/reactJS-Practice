import React, { useContext } from 'react'
import { Gift } from './Person1'
import './person.css'

const Person4 = () => {
    let gift = useContext(Gift);
    // console.log(gift)
    let {title, model, imgUrl, desc} = gift;
    return (
        <div>
            <h1 style={{color : 'red'}}>Person 4</h1>
            <h3>Kushal likes {title} {model}</h3>
            <div className="container">
                <img src={imgUrl} alt="redmi mobile" />
                <h3>{title} {model}</h3>
                <p>{desc}</p>
                <button>View Details</button>
            </div>
        </div>
    )
}

export default Person4
