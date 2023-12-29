import "./Rating.scss";

function Rating({score}){
const rating = [1, 2, 3, 4, 5]; // array contenant la position des étoiles
let key=0;
return (
    <div className="rating">
        {rating.map(rating => 
            (parseInt(score) >= rating)?(
                <i key={key++} className="fa fa-star checked"></i> //si la note du logement est supérieure ou égale à la position de l'étoile, étoile en couleur
            ) : (
                <i key={key++} className="fa fa-star"></i>
            )
            )
        }
    </div>
)

}

export default Rating;