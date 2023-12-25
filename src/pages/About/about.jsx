import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/PageContent/Collapse";

function About() {
const [fiability, fiText] = ["Fiabilité","MAIS JE SAIS PAS MOI"];
const [respect, reText] = ["",""];
const [service, serText] = ["",""];
const [security, secText] = ["",""];

  return (
    <div className="page">
      <Banner />
      <Collapse title={fiability} content={fiText} />
    </div>
  );
}

export default About;
