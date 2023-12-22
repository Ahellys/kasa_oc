import '../../styles/footer.scss';
import logo_white from '../../assets/images/LOGO_white.png';

function Footer(){
    return(
        <footer>
            <img src={logo_white} alt='logo KASA en blanc' />
            <p>2020 Kasa. All rights reserved</p>
        </footer>);
}

export default Footer