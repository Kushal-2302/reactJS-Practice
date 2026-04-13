import React from 'react'
import { sidebar_data } from "./Webappdata";

const Sidebar = () => {
    return (
        <div id='sidebar'>
            <h2>Select Brand</h2>
            <div className="brand">
                {sidebar_data.map((elem)=>{
                    let {brandname} = elem;
                    return (
                        <div className="brands">
                            <input type="checkbox" />
                            <p>{brandname}</p>
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}

export default Sidebar
