import PropTypes from 'prop-types'
import '../styles/Rating.scss'

function Rating({ rating }) {
  const maxRating = 5
  const stars = []

  for (let i = 1; i <= maxRating; i++) {
    stars.push(
      <span key={i} className={i <= rating ? 'star filled' : 'star'}>★</span>
    )
  }

  return <div className="rating">{stars}</div>
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
}

export default Rating