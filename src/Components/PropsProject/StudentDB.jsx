import React from "react";
import { students_data } from "./studentsdata";
import BEdata from "./BEdata";
import Mcadata from "./Mcadata";
import './studentdb.css'

const StudentDB = () => {
  // console.log(students_data)

  let beStudents = students_data.filter((elem) => elem.degree === "BE");
  // console.log(beStudents)

  let mcaStudents = students_data.filter((elem) => elem.degree === "MCA");
  console.log(mcaStudents);
  return (
    <div className="students-db">
      <div className="allStudContainer">
        <h1>Students Database</h1>
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
            {students_data.map((elem, index) => {
              let { fname, lname, age, degree } = elem;
              return (
                <>
                  <tr key={index + 1}>
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
      <hr />

      <BEdata beStudents={beStudents} />
      <hr />
      <Mcadata mcaStudents={mcaStudents} />
    </div>
  );
};

export default StudentDB;
