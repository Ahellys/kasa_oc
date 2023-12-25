import lodgementsArray from '../../assets/logements.json'
import LodgingBanner from '../Banner/LodgingBanner';
import { Navigate } from 'react-router';

function LodgingDetails({id}){
    if (id){
        const lodgement = lodgementsArray.find(lodgement => id===lodgement.id);
        return(
            <div>
                <LodgingBanner lodgement={lodgement}/>
                <div>
                    <h2>{lodgement.title}</h2>
                </div>
                <div>
                    <p>{lodgement.tags}</p>
                    <p>{lodgement.rating}</p>
                </div>
                <div>
                    <p>{lodgement.description}</p>
                    <p>{lodgement.equipments}</p>
                </div>
            </div>
        )
    }
    return(
        <Navigate to='*' />
    )  
}

export default LodgingDetails;