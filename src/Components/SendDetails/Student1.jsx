import React from 'react'

const Student1 = (props) => {
    let {stud1} = props;
    return (
        <div>
            <h2>Student 1 : {stud1.fname} age is {stud1.age}</h2>
        </div>
    )
}

export default Student1
