import { useState } from 'react';


function Carrousel({lodgement}){
    const [activeIndex, setActiveIndex] = useState(0);
    if (lodgement){
        const pictures = lodgement.pictures;
        const length = pictures.length;
    
        const prevImg = () => {
            setActiveIndex(activeIndex === 0 ? length - 1 : activeIndex - 1); 
            };
        const nextImg = () => {
            setActiveIndex(activeIndex === length - 1 ? 0 : activeIndex + 1); 
            };
        return length>1?(
            <div className="carrousel">
                <span id="previousImage" onClick={prevImg}>{"<"}</span>
                <img src={pictures[activeIndex]} alt="intérieur du logement"/>
                <span id="activeImage">{activeIndex+1}/{length}</span>
                <span id="nextImage" onClick={nextImg}>{">"}</span>
            </div>
        ):( 
            <div className="carrousel">
                <img src={pictures[activeIndex]} alt="intérieur du logement"/>
            </div>
        );
    }

}

export default Carrousel;