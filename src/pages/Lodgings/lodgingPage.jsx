import LodgingDetails from "../../components/PageContent/LodgingDetail";
import LodgingBanner from "../../components/Banner/LodgingBanner";


function Lodging({activeLodgement, setActive}) {
    const id = activeLodgement;
    return (
      <div >
        <LodgingBanner id={id}/>
        <LodgingDetails id={id}/>
      </div>
    );
  }
  
  export default Lodging;