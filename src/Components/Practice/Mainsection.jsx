import React from 'react'
import { maincard_data } from './Webappdata'
import './webapp.css'

const Mainsection = () => {
    return (
        <div id='main_container'>
            <h1>Market Place</h1>
            <div className="cards">
                {maincard_data.map((elem,index)=>{
                    let {title, imageUrl,rating, desc} = elem
                    return (
                        <div className="card" key={index}>
                            <img src={imageUrl} alt={title} />
                            <h3>{title}</h3>
                            <h4><span>&#9733;</span> {rating}</h4>
                            <p>{desc}</p>
                            <button>View Details</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Mainsection
