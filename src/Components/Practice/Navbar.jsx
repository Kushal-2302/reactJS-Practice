import React from "react";
import "./webapp.css";
import { navbar_data } from "./Webappdata";

const Navbar = () => {
  return (
    <div id="navbar">
      <div className="image">
        {navbar_data.map((elem) => {
          let { title, imageUrl } = elem;
          return (
            <>
              <div className="img">
                <img src={imageUrl} alt="" />
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
