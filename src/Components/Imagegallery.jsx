import { useState } from "react";
import image1 from "../assets/images/img1.jfif";
import image2 from "../assets/images/img2.jfif";
import image3 from "../assets/images/img3.jfif";
import image4 from "../assets/images/img4.jfif";
import image5 from "../assets/images/img5.jfif";
import image6 from "../assets/images/img6.jfif";

const Imagegallery = () => {
  const images = [image1, image2, image3, image4, image5, image6];

  const [hoverIndex, setHoverIndex] = useState(null);

  const all = {
    background: "crimson",
    minHeight: "100vh",
  };

  const headStyle = {
    textAlign: "center",
    color: "white",
    margin: "20px 0",
    padding: "20px 0",
  };

  const imageStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  };

  const getImgStyle = (index) => ({
    width: "200px",
    borderRadius: "10px",
    boxShadow: "1px 1px 15px black",
    margin: "20px",
    transition: "0.3s",
    transform: hoverIndex === index ? "scale(1)" : "scale(.9)",
  });

  return (
    <div style={all}>
      <h1 style={headStyle}>Image Gallery</h1>

      <div style={imageStyle}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            style={getImgStyle(index)}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          />
        ))}
      </div>
    </div>
  );
};

export default Imagegallery;