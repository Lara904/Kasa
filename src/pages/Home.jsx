import useFetch from "../hooks/useFetch";
import Card from "../components/Card";
import Loader from "../components/Loader";
import { Helmet } from 'react-helmet-async';
import "../styles/Home.scss";

function Home() {
  const { data: logements, isLoading, error } = useFetch('/data/logements.json');

  if (isLoading) return <Loader />;
  if (error) return <p role="alert">Erreur lors du chargement des logements.</p>;

  return (
    <main className="home">
      <Helmet>
        <title>Accueil - Kasa</title>
        <meta name="description" content="Découvrez tous nos logements disponibles chez Kasa." />
      </Helmet>

      <h1 className="sr-only">Liste des logements</h1> 
      <section className="card-list" aria-label="Logements disponibles">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;