import { Link } from "react-router-dom";
import Banner from "../../components/Banner/Banner"
import lodgements from "../../assets/logements.json";
import '../../styles/home.scss';
import banner from "../../assets/images/banner_main.svg"


function Home() {
  const bannerText ="Chez vous, partout et ailleurs";
  const listLodgements = lodgements.map(lodgement =>
        <div className="card" key={lodgement.id}>
            <Link to={'/pages/Lodgings/'+lodgement.id} >
                <img src={lodgement.cover} alt='appartement' />
                <p>{lodgement.title}</p>
            </Link>  
        </div>
    );
  return (
    <div className="home page">
      <Banner img={banner} text={bannerText}/>
      <div className="cardGallery" >
        {listLodgements}
      </div>
    </div>

  );
}

export default Home;
