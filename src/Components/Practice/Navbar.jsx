import React from "react";
import "./webapp.css";
import { navbar_data } from "./Webappdata";

const Navbar = () => {
  return (
    <div id="navbar">
      <div className="image">
        {navbar_data.map((elem,index) => {
          let { title, imageUrl } = elem;
          return (
            <>
              <div className="img" key={index}>
                <img src={imageUrl} alt={title} />
                <h4>{title}</h4>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
