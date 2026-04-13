import React from "react";

const BEdata = (props) => {
  // console.log(props)
  let { beStudents } = props;
//   console.log(beStudents)
  return (
    <div>
      <h1>BE Students Data</h1>
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
          {beStudents.map((elem, index) => {
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
  );
};

export default BEdata;
