import lodgementsArray from '../../assets/logements.json'

function LodgingDetails(props){
    const id= props.id; 
    const lodgement = lodgementsArray.find(lodgement => id===lodgement.id);
    return(
        
        <div>

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

export default LodgingDetails;