//import { Link } from "react-router-dom";
import Card from "../../components/PageContent/LodgingCard";
import lodgements from "../../assets/logements.json";
import '../../styles/home.scss';


function Home() {
  const listLodgements = lodgements.map(lodgement =>
  <div className="card" key={lodgement.id} >
    <Card title={lodgement.title}
          cover={lodgement.cover}
          id={lodgement.id}
    />    
  </div>

    );
  return (
    <div className="cardGallery" >
      {listLodgements}
    </div>
  );
}

export default Home;
