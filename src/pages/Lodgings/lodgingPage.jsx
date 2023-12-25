import LodgingDetails from "../../components/PageContent/LodgingDetail";
import { Navigate } from "react-router";


function Lodging({activeLodgement, setActive}) {
    const id = activeLodgement;
      return ( id===undefined? <Navigate to="*"/> :
      <div className="page">
        <LodgingDetails id={id}/>
      </div>
    )
  }
  
  export default Lodging;