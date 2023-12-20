import Banner from "../../components/Banner/Banner";
//import { Link } from "react-router-dom";
import Card from "../../components/PageContent/LodgingCard";
import lodgements from "../../assets/logements.json";


function Home() {
  const listLodgements = lodgements.map(lodgement =>
  <li key={lodgement.id}>
    <Card title={lodgement.title}
          cover={lodgement.cover}
          id={lodgement.id}
    />    
  </li>

    );
  return (
    <div >
      <Banner />
      {listLodgements}
    </div>
  );
}

export default Home;
