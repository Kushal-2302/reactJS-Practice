import { cardsdata } from "./cardsdata";
import './cards.css'

const Cards = () => {
    // console.log(cardsdata)
  return (
    <>
      <div className="cards">
        <h1>Cards</h1>
        <div className="container">
            {cardsdata.map((elem)=>{
                let {title,imageUrl,desc} = elem
                return (
                    <>
                        <div className="card">
                            <img src={imageUrl} alt="No Image" />
                            <div className="title">{title}</div>
                            <div className="desc">{desc}</div>
                            
                        </div>
                    </>
                )
            })}
        </div>
      </div>
    </>
  );
};
export default Cards;
