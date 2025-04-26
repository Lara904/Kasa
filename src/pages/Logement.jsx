import { useParams, Navigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Carousel from "../components/Carousel";
import Tag from "../components/Tag";
import Dropdown from "../components/Dropdown";
import Rating from "../components/Rating";
import { Helmet } from 'react-helmet-async';
import "../styles/Logement.scss";

function Logement() {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch("/data/logements.json");

  if (isLoading) return <p role="alert">Chargement en cours...</p>;
  if (error) return <p role="alert">Erreur lors du chargement des données.</p>;

  const logement = data?.find((item) => item.id === id);

  if (!logement) {
    return <Navigate to="/notfound" />;
  }

  return (
    <main className="logement">
      <Helmet>
        <title>{logement.title} - Kasa</title>
        <meta name="description" content={`Découvrez le logement ${logement.title} situé à ${logement.location} sur Kasa.`} />
      </Helmet>
      <Carousel pictures={logement.pictures} />

      <header className="logement-header">
        <div>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className="tags">
            {logement.tags.map((tag, index) => (
              <Tag key={index} label={tag} />
            ))}
          </div>
          <Rating rating={parseInt(logement.rating)} />
        </div>

        <div className="host">
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} alt={`Photo de ${logement.host.name}`} loading="lazy" />
        </div>
      </header>

      <section className="dropdowns" aria-label="Informations sur le logement">
        <Dropdown title="Description">{logement.description}</Dropdown>
        <Dropdown title="Équipements">
          <ul>
            {logement.equipments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Dropdown>
      </section>
    </main>
  );
}

export default Logement;