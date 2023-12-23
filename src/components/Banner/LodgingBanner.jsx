import lodgementsArray from '../../assets/logements.json';
import { useState } from 'react';


function LodgingBanner({id}){
    const [active, setActive] = useState(0);
    const lodgement = lodgementsArray.find(lodgement => id===lodgement.id );
    const pictures = lodgement.pictures;
    console.log(lodgement);
    console.log(id);
    const length = pictures.length;

    const prevImg = () => {
		setActive(active === length - 1 ? 0 : active + 1); 
	};
	const nextImg = () => {
		setActive(active === 0 ? length - 1 : active - 1); 
	};
    
    return(
        <div className="carrousel">
            <span id="previousImage" onClick={prevImg}>{"<"}</span>
            <img src={pictures[active]} alt="intérieur du logement"/>
            <span id="nextImage" onClick={nextImg}>{">"}</span>
        </div>
    );
}

export default LodgingBanner