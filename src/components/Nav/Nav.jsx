import { Link } from "react-router-dom";
import "./Nav.scss";

function NavBar(){
    return(
    <nav>
        <Link  to="/kasa_oc/">Accueil</Link>
        <Link  to="kasa_oc/pages/About">A propos</Link>
    </nav>);
}

export default NavBar