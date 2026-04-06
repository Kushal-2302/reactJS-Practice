import React from "react";
import "./App.css";
import Basic from "./Components/Basic";
import Imagegallery from "./Components/Imagegallery";
import ImagesGallery from "./Components/ImagesGallery/ImagesGallery";
import ImageGallery2 from "./Components/ImageGallery2/ImageGallery2";

const App = () => {
  return (
    <React.Fragment>
      {/* <h1 style={{color:"red"}}>I am React JS</h1>
         <p>hi</p> */}
      {/* <Basic/> */}
      {/* <Imagegallery/> */}
      {/* <ImagesGallery /> */}
      <ImageGallery2 />
    </React.Fragment>
  );
};
export default App;
