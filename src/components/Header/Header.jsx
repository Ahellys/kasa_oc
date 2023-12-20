import { Link } from "react-router-dom";

function Header(){
    return(
    <header>
        <h1>Kasa</h1>
        <Link to="/">Accueil</Link>
        <Link to="pages/About">A propos</Link>
    </header>);
}

export default Header