import React from "react";
import CompC from "./CompC";

const CompB = (props) => {
   
  return (
    <div>
      <h1>Component A</h1>
      <CompC num1 = {props.num - 20}/>
    </div>
  );
};

export default CompB;
