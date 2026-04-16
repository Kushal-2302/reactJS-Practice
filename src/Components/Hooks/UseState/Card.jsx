import React from "react";
import "./hooks.css";

const Card = () => {
  return (
    <div className="hooks card">
      {/* <h1>Toggle Card</h1> */}
      <div className="container">
        <img
          src="https://cdn.pixabay.com/photo/2023/06/29/10/33/lion-8096155_1280.png"
          alt=""
        />
        <h3>Lion</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, nobis?
        </p>
      </div>
    </div>
  );
};

export default Card;
