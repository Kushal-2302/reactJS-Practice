import './imagegallery.css'
import image1 from "../../assets/images/img1.jfif";
import image2 from "../../assets/images/img2.jfif";
import image3 from "../../assets/images/img3.jfif";
import image4 from "../../assets/images/img4.jfif";
import image5 from "../../assets/images/img5.jfif";
import image6 from "../../assets/images/img6.jfif";
const ImagesGallery = () => {
    return (
        <>
            <div className="image-gallery">
                <h1>Image Gallery</h1>
                <div className="container">
                    <img src={image1} />
                    <img src={image2} />
                    <img src={image3} />
                    <img src={image4} />
                    <img src={image5} />
                    <img src={image6} />
                </div>
            </div>
        </>
    )
}
export default ImagesGallery