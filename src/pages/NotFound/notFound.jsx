import { Link } from "react-router-dom";
import "./notFound.scss";

function NotFound() {
    return (
      <div className="notFound page">
        <span className="notFound__code">404</span>
        <p>Oups ! La page que vous demandez n'existe pas</p>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    );
  }
  
  export default NotFound;