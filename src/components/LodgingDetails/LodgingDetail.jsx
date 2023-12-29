import lodgementsArray from '../../assets/logements.json'
import Carrousel from '../Carrousel/Carrousel';
import Tags from '../Tags/Tags';
import Collapse from '../Collapse/Collapse';
import { Navigate } from 'react-router';
import Owner from '../OwnerInfo/Owner';
import Rating from '../Rating/Rating';
import "./Lodging.scss";

function LodgingDetails({id}){
    if (id){ // vérification qu'il y a bien un ID
        const lodgement = lodgementsArray.find(lodgement => id===lodgement.id);
        if(lodgement) // vérification qu'il est bien dans la base de données
            return(
            <div>
                <Carrousel lodgement={lodgement}/>
                <div className='divInfos'>
                    <div className='info intro'>
                        <div className='title__block'>
                            <h2>{lodgement.title}</h2>
                            <p>{lodgement.location}</p>
                        </div>
                        <Tags tagArray={lodgement.tags}/>
                    </div>
                    <div className='info quickLook'>
                        <Owner name={lodgement.host.name} photo={lodgement.host.picture}/>
                        <Rating score={lodgement.rating}/>
                    </div>
                </div>

                <div className="info detail"> 
                    <Collapse id={1} title="Description" content={lodgement.description}/>
                    <Collapse className="equip" id={2} title="Équipements" content={lodgement.equipments}/>  
                </div>
            </div>
            );
    }
    return( // renvoi page 404 si pas d'id valide
        <Navigate to='*' />
    )  
}

export default LodgingDetails;