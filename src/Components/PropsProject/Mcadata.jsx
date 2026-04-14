import React from 'react'
import './studentdb.css'

const Mcadata = (props) => {
    let {mcaStudents} = props
    return (
        <div className='mcaContainer'>
            <h1>MCA students data</h1>
            <div className="container">
                <table>
        <thead>
          <tr>
            <th>Fname</th>
            <th>Lname</th>
            <th>Age</th>
            <th>Degree</th>
          </tr>
        </thead>
        <tbody>
          {mcaStudents.map((elem, index) => {
            let { fname, lname, age, degree } = elem;
            return (
              <>
                <tr key={index+1}>
                  <td>{fname}</td>
                  <td>{lname}</td>
                  <td>{age}</td>
                  <td>{degree}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
            </div>
        </div>
    )
}

export default Mcadata
