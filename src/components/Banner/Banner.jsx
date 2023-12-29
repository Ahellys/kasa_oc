import "./Banner.scss"

function Banner({img, text}) { // Composant bannière réutilisable, le fond et le texte sont passés en propriété
    return (                
      <div className="banner">
        <img src={img} alt='paysage'/>
        <p>{text}</p>
      </div>
    );
  }
  
  export default Banner;