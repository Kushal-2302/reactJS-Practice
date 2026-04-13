import React from 'react'
import { students_data } from './studentsdata'
import BEdata from './BEdata'

const StudentDB = () => {
    // console.log(students_data)

    let beStudents = students_data.filter((elem)=> elem.degree === 'BE')
    // console.log(beStudents)
    return (
        <div className='students-db'>
            <h1>Students Database</h1>

            <BEdata beStudents = {beStudents}/>
        </div>
    )
}

export default StudentDB
