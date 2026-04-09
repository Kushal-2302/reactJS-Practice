import React from "react";
import "./App.css";
import Basic from "./Components/Basic";
import Imagegallery from "./Components/Imagegallery";
import ImagesGallery from "./Components/ImagesGallery/ImagesGallery";
import ImageGallery2 from "./Components/ImageGallery2/ImageGallery2";
import Cards from "./Components/Cards/Cards";
import Students from "./Components/StudentsDB/Students";
import Friends from "./Components/FriendsDetails/Friends";

const App = () => {
  return (
    <React.Fragment>
      {/* <h1 style={{color:"red"}}>I am React JS</h1>
         <p>hi</p> */}
      {/* <Basic/> */}

      {/* --Date : 06/04/2026 */}
      {/* <Imagegallery/> */}
      {/* <ImagesGallery /> */}
      {/* <ImageGallery2 /> */}

      {/* --Date : 07/04/2026 */}
      {/* <Cards /> */}

      {/* --Date : 08/04/2026 */}
      {/* <Students /> */}

      {/* --Date : 09/04/2026 */}
      <Friends />
    </React.Fragment>
  );
};
export default App;
