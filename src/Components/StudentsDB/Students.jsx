import React from "react";
import { studentsData } from "./studentsdata";
import './students.css'

// rafce - directly creating component
const Students = () => {
  // console.log(studentsData)
  return (
    <>
      <div className="students">
        <h1>Students DataBase</h1>
        <div className="container">
          <table>
            <thead>
              <tr>
                <th>SIno</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Place</th>
                <th>Date of Birth</th>
                <th>Degree</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {studentsData.map((elem,index) => {
                let { id, fname, lname, place, dob, degree } = elem
                return (
                    <tr key={index}>
                        <th>{index+1}</th>
                        <td>{fname}</td>
                        <td>{lname}</td>
                        <td>{place}</td>
                        <td>{dob}</td>
                        <td>{degree}</td>
                        <td>{new Date().getFullYear() - dob.slice(0,4)}</td>
                    </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Students;
