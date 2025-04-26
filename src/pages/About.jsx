import Dropdown from "../components/Dropdown";
import { Helmet } from 'react-helmet-async';
import "../styles/About.scss";

function About() {
  return (
    <main className="about">
      <Helmet>
        <title>À propos - Kasa</title>
        <meta name="description" content="En savoir plus sur Kasa, nos valeurs de fiabilité, respect, service et sécurité." />
      </Helmet>
      <h1 className="sr-only">À propos de Kasa</h1>
      <section className="about-container" aria-label="Valeurs de Kasa">
        <Dropdown title="Fiabilité">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées.
        </Dropdown>

        <Dropdown title="Respect">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
        </Dropdown>

        <Dropdown title="Service">
          Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
        </Dropdown>

        <Dropdown title="Sécurité">
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services.
        </Dropdown>
      </section>
    </main>
  );
}

export default About;