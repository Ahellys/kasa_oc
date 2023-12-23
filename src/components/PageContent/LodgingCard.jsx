import { Link } from "react-router-dom";

function Card(props){
    const {title}= props;
    return(   
            <Link to='/pages/Lodgings'>
                <p>{title}</p>
            </Link>  
    )
}

export default Card;