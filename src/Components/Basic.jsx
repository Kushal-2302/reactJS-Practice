import image1 from "../assets/images/img1.jfif";
import image2 from "../assets/images/img2.jfif";
import image3 from "../assets/images/img3.jfif";
const Basic = () => {
  let num = 200;
  let fname = "Dinga";

  // Conditions
  let msg = "";
  if (false) {
    msg = "Welcome";
  } else {
    msg = "bye";
  }

  // Creating object for css style
  let mystyle = {
    color: "red",
    background: "yellow",
    textAlign: "center",
    margin: "2vh 0",
  };

  let html = " This is HTML Language";

  let imageUrl =
    "https://cdn.pixabay.com/photo/2016/09/01/13/35/doll-1636128_1280.jpg";


    let imageStyle = {
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        flexDirection : "column"
    }
    let imgStyle = {
        boxShadow : "1px 1px 15px black",
        margin : "20px",
        borderRadius : "10px"
    }
  return (
    <>
      {/* Dynamic Content */}
      <h2>{num}😎</h2>
      <h2>{fname}</h2>

      {/* Static & Dynamic Content */}
      <h4>My name is {fname}</h4>

      {/* Static Content */}
      <h1>Iam Basic Component</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti,
        voluptatem?
      </p>

      {/* Generate 4 digit otp */}
      <h2>{Math.floor(Math.random() * 9000 + 1000)}</h2>

      {/* Consitions */}
      <h3>{true ? "welcome" : "bye"}</h3>

      {/* inline style */}
      <h2 style={mystyle}>Design</h2>
      <p style={mystyle}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
        reiciendis explicabo minus ipsam reprehenderit voluptatum nostrum
        exercitationem impedit excepturi rerum! Voluptas, nam. Beatae veniam
        praesentium velit? Optio distinctio numquam rem!
      </p>

      <h2 style={{ color: "blue" }}>My name is Kushal</h2>

      {/* Printing dynamically for both content and title name */}
      <h1 title={html}>{html}</h1>

      <img src={imageUrl} alt="" height={num} />
      <div className="images" style={imageStyle}>
        <img style={imgStyle} src={image1} width={num} />
        <img style={imgStyle} src={image2} width={num} />
        <img style={imgStyle} src={image3} width={num} />
      </div>
    </>
  );
};

export default Basic;
