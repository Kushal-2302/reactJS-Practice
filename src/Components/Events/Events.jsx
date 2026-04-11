import React from "react";

const Events = () => {
  let fun = () => {
    console.log("hello");
  };
  let printname = (fname) => {
    console.log(`hi ${fname}`);
  };
  let calculateAge = (dob) => {
    console.log(new Date().getFullYear() - dob);
  };

  let users = [
    { name: "kushal", place: "Bangarpet", dob: 2002 },
    { name: "kumar", place: "kolar", dob: 2003 },
    { name: "ravi", place: "bengaluru", dob: 2006 }
  ];

  let viewDetails = (username, plc, dob) => {
    let dobs = new Date().getFullYear() - dob;
    alert(`${username} is from ${plc}, and age is ${dobs}`);
  };

  
  let generateOTP = () => {
    let otp =  Math.floor(1000 + Math.random() * 9000);
    alert(`otp is ${otp}`)
  };

  return (
    <>
      <div className="events">
        <h1>Events</h1>  <br /> <br />

        <button onClick={fun}>Click Me</button> 
        <button
          onClick={() => {
            return printname("Kushal");
          }}
        >
          PrintName
        </button>  <br /><br />
        

        <button
          onClick={() => {
            return calculateAge(2002);
          }}
        >
          Calculate Age
        </button> 

        <div className="userdetails">
          <h2>List of names</h2>
          <ul>
            {users.map((user, index) => {
              let { name, place, dob } = user;
              return (
                <>
                  <li key={index}>
                    {name}
                    <button onClick={() => viewDetails(name, place, dob)}>
                      View
                    </button>
                  </li>
                </>
              );
            })}
          </ul>

          <button onClick={() => generateOTP()}>Generate OTP</button>
          
        </div>
      </div>
    </>
  );
};

export default Events;
