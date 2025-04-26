import { Link } from "react-router-dom";
import "../styles/Card.scss";
import PropTypes from 'prop-types'


Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
}

function Card({ id, title, cover }) {
  return (
    <Link to={`/logement/${id}`} className="card">
      <img src={cover} alt={title} />
      <div className="card-title">{title}</div>
    </Link>
  );
}

export default Card;