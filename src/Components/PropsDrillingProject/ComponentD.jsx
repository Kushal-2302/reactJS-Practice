import React from 'react'

const ComponentD = ({data}) => {
    const newData = [...data , {id : 3 , name : "Ram"}]
    console.log(newData)
    return (
        <div>
            <h1>I am in Component D</h1>
            {newData.map((elem)=>{
                let {id, name} = elem
                return (
                    <p key={id}>{id} : {name}</p>
                )
            })}
        </div>
    )
}

export default ComponentD
