import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import "../styles/NotFound.scss";

function NotFound() {
  return (
    <main className="not-found" role="alert">
      <Helmet>
        <title>Page non trouvée - Kasa</title>
        <meta name="description" content="La page que vous recherchez n'existe pas. Retournez à l'accueil de Kasa." />
      </Helmet>
      <h1>404</h1>
      <p>Oups ! La page que vous demandez n'existe pas.</p>
      <Link to="/" aria-label="Retour à l’accueil">Retour à l’accueil</Link>
    </main>
  );
}

export default NotFound;