import { useState } from "react";
import "../../styles/collapse.scss"

function Collapse({id,title,content}){
    const [isOpen, setOpen]= useState(false); // State de l'élément, ouvert ou fermé
    const toggle = () => { //Fonction toggle qui change l'état
        setOpen(!isOpen);
    };
    let key=0;
    const contentDetail =Array.isArray(content)?(content.map(content => // Si le contenu est un array, le transforme automatiquement en liste
        <li key={key++}>{content}</li>
        )):content;
    
    return(
        <div className="collapseElement">
            <h2 className="collapseTitle">{title} 
                <span id={"arrow"+id} className="arrow" onClick={(e) => { // on click, écoute l'évènement pour déclencher les animations et ouvrir la collapse
                    toggle();
                    document.getElementById(e.target.id).classList.toggle("open");
                    }} aria-hidden="true">^</span>
            </h2>
            <p aria-hidden={isOpen?"true":"false"} className={isOpen?"collapseContent open":"collapseContent"}>{contentDetail}</p>
        </div>
    );
}

export default Collapse;