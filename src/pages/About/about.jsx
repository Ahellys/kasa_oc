import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/PageContent/Collapse";
import banner from "../../assets/images/banner_about.svg";
import aboutArray from "../../assets/about.json";

function About() {
const aboutInfos = aboutArray.map(about =>
  <li key={about.id}>
    <Collapse id={about.id} title={about.title} content={about.content}/>
  </li>)

  return (
    <div className="about page">
      <Banner img={banner}/>
      {aboutInfos}
    </div>
  );
}

export default About;
