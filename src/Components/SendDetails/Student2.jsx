import React from 'react'

const Student2 = (props) => {
    let {stud2} = props
    return (
        <div>
            <h2>Student 2 : {stud2.fname} Completed {stud2.degree}</h2>
        </div>
    )
}

export default Student2
