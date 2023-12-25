import { Link } from "react-router-dom";
import lodgements from "../../assets/logements.json";
import '../../styles/home.scss';


function Home({setActive}) {

  const listLodgements = lodgements.map(lodgement =>
        <div className="card" key={lodgement.id} onClick={()=> {
          setActive(lodgement.id);
          sessionStorage.setItem('activeId',lodgement.id);
            }
          }>
            <Link to='/pages/Lodgings'>
                <p>{lodgement.title}</p>
            </Link>  
        </div>
    );
  return (
    <div className="cardGallery page" >
      {listLodgements}
    </div>
  );
}

export default Home;
