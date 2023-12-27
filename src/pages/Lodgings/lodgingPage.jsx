import LodgingDetails from "../../components/PageContent/LodgingDetail";
import { Navigate, useParams } from "react-router";
import '../../styles/lodgements.scss';


function Lodging() {
    const id = useParams().id;
      return ( id===undefined? <Navigate to="*"/> :
      <div className="lodgement page">
        <LodgingDetails id={id}/>
      </div>
    )
  }
  
  export default Lodging;