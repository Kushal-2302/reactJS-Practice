import './ImageGallery2.css'

import image1 from "../../assets/images/img1.jfif";
import image2 from "../../assets/images/img2.jfif";
import image3 from "../../assets/images/img3.jfif";
const ImageGallery2 = () => {
    let arrayImages = [image1, image2, image3];
    return (
        <>
        <div className="image-gallery2">
            <h1>Image Gallery 2</h1>  
            <div className="container">
                {
                    arrayImages.map((elem)=>{
                        return <img src={elem} />
                    })
                }
            </div>
        </div>
        </>
    )
}
export default ImageGallery2
