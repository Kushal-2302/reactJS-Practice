import React from "react";
import CompD from "./CompD";

const CompC = (props) => {
   
  return (
    <div>
      <h1>Component C</h1>
      <CompD num2 = {props.num1 - 20}/>
    </div>
  );
};

export default CompC;
