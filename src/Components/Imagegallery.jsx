import image1 from "../assets/images/img1.jfif";
import image2 from "../assets/images/img2.jfif";
import image3 from "../assets/images/img3.jfif";
import image4 from "../assets/images/img4.jfif";
import image5 from "../assets/images/img5.jfif";
import image6 from "../assets/images/img6.jfif";
const Imagegallery = () => {
  let all = {
    background: "crimson",
    height: "100vh",
  };
  let headStyle = {
    textAlign: "center",
    color: "white",
    margin: "20px 0",
    padding: "20px 0",
  };
  let imageStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  };
  let imgStyle = {
    width: "200px",
    borderRadius: "10px",
    boxShadow: "1px 1px 15px black",
    margin: "20px",
  };
  return (
    <>
      <div style={all}>
        <h1 className="heading" style={headStyle}>
          This is Image Gallery
        </h1>
        <div className="image" style={imageStyle}>
          <img src={image1} style={imgStyle} />
          <img src={image2} style={imgStyle} />
          <img src={image3} style={imgStyle} />
          <img src={image4} style={imgStyle} />
          <img src={image5} style={imgStyle} />
          <img src={image6} style={imgStyle} />
        </div>
      </div>
    </>
  );
};
export default Imagegallery;
