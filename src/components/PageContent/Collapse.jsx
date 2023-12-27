import { useState } from "react";
import "../../styles/collapse.scss"

function Collapse({id,title,content}){
    const [isOpen, setOpen]= useState(false);
    const toggle = () => {
        setOpen(!isOpen);
    };
    let key=0;
    const contentDetail =Array.isArray(content)?(content.map(content =>
        <li key={key++}>{content}</li>
        )):content;
    
    return(
        <div className="collapseElement">
            <h2 className="collapseTitle">{title} 
                <span id={"arrow"+id} className="arrow" onClick={(e) => {
                    toggle();
                    document.getElementById(e.target.id).classList.toggle("open");
                    }} aria-hidden="true">^</span>
            </h2>
            <p aria-hidden={isOpen?"true":"false"} className={isOpen?"collapseContent open":"collapseContent"}>{contentDetail}</p>
        </div>
    );
}

export default Collapse;