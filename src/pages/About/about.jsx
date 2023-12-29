import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import banner from "../../assets/images/banner_about.svg";
import aboutArray from "../../assets/about.json";
import './about.scss';

function About() {
const aboutInfos = aboutArray.map(about => // l'id est utilisé comme clé pour la fonction map et comme id pour cibler les éléments HTML
        <Collapse key={about.id}  id={about.id} title={about.title} content={about.content}/>
    )

  return (
    <div className="about page">
      <Banner img={banner}/>
      {aboutInfos}
    </div>
  );
}

export default About;
