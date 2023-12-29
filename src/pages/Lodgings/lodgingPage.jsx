import LodgingDetails from "../../components/LodgingDetails/LodgingDetail";
import { Navigate, useParams } from "react-router";


function Lodging() {
    const id = useParams().id; //récupération de l'id passé en paramètre dans la route
      return ( id===undefined? <Navigate to="*"/> : // si id incorrect, renvoi vers la page 404
      <div className="lodgement page">
        <LodgingDetails id={id}/>
      </div>
    )
  }
  
  export default Lodging;