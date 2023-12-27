import lodgementsArray from '../../assets/logements.json'
import Carrousel from '../Banner/Carrousel';
import Tags from './Tags';
import Collapse from './Collapse';
import { Navigate } from 'react-router';
import Owner from './Owner';
import Rating from './Rating';

function LodgingDetails({id}){
    if (id){
        const lodgement = lodgementsArray.find(lodgement => id===lodgement.id);
        return(
            <div>
                <Carrousel lodgement={lodgement}/>
                
                <div className='info intro'>
                    <div className='title__block'>
                        <h2>{lodgement.title}</h2>
                        <p>{lodgement.location}</p>
                    </div>
                    <Owner name={lodgement.host.name} photo={lodgement.host.picture}/>
                </div>
                <div className='info quickLook'>
                    <Tags tagArray={lodgement.tags}/>
                    <Rating score={lodgement.rating}/>
                </div>
                <div className="info detail"> 
                    <Collapse id={1} title="Description" content={lodgement.description}/>
                    <Collapse className="equip" id={2} title="Équipements" content={lodgement.equipments}/>  
                </div>
            </div>
        )
    }
    return(
        <Navigate to='*' />
    )  
}

export default LodgingDetails;