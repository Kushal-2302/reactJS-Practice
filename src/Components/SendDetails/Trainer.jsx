import React from 'react'
import Student1 from './Student1'
import Student2 from './Student2'

const Trainer = () => {
    let stud1 = {
        fname : "Kushal",
        lname : "kumar",
        age : 24,
        degree : "MCA" 
    }
     let stud2 = {
        fname : "Ravi",
        lname : "kumar",
        age : 22,
        degree : "BE" 
    }
    return (
        <div>
            <h1>I am a Trainer</h1>
            <Student1 stud1 = {stud1}/>
            <Student2 stud2 = {stud2}/>
        </div>
    )
}

export default Trainer
