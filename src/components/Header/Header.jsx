import logo from '../../assets/images/LOGO.jpg'
import { Link } from 'react-router-dom';
import NavBar from "./Nav";
import '../../styles/header.scss';

function Header(){
    return(
    <header>
        <h1>
            <Link to="/">
                <img src={logo} alt="logo KASA" />
            </Link>
        </h1>
        <NavBar />
    </header>);
}

export default Header