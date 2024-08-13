import { useContext } from "react";
import { PictureContainerContext } from "../../context/PictureContainerContext";

export default function PhotoCarousel(){
    const { nextHandler, previousHandler, currentPicture } = useContext(PictureContainerContext);
    console.log(currentPicture);

    return (
        <div className="row justify-content-center">
            <img src={currentPicture} 
                className="img-fluid col-xl-9 col-auto" 
                alt="..."
            />
            <button className="carousel-control-prev">
                <span className="carousel-control-prev-icon bg-dark" onClick={nextHandler}/>
            </button>
            <button className="carousel-control-next">
                <span className="carousel-control-next-icon bg-dark" onClick={previousHandler}/>
            </button>
        </div>  
    );
};