import { useState } from "react";
import "../../styles/collapse.scss"

function Collapse({title,content}){
    const [isOpen, setOpen]= useState(false);
    const toggle = () => {
        setOpen(!isOpen);
    };
    
    return(
        <div className="collapseElement">
            <h2 className="collapseTitle">{title} 
                <span id="toggleCollapse" className="arrow" onClick={() => {
                    toggle();
                    document.getElementById("toggleCollapse").classList.toggle("open");
                    }} aria-hidden="true">^</span>
            </h2>
            <p aria-hidden={isOpen?"true":"false"} className={isOpen?"collapseContent open":"collapseContent"}>{content}</p>
        </div>
    );
}

export default Collapse;