import { useState } from 'react'
import PropTypes from 'prop-types'
import '../styles/Carousel.scss'

function Carousel({ pictures = [] }) {
  const [current, setCurrent] = useState(0)
  const total = pictures.length

  const next = () => setCurrent((current + 1) % total)
  const prev = () => setCurrent((current - 1 + total) % total)

  if (total === 0) return <p role="alert">Aucune image disponible.</p>

  return (
    <div className="carousel" role="region" aria-label="Galerie de photos du logement">
      {total > 1 && <button className="prev" onClick={prev} aria-label="Image précédente">‹</button>}

      {pictures.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index + 1}`}
          className={index === current ? 'active' : ''}
          loading="lazy"
        />
      ))}

      {total > 1 && <button className="next" onClick={next} aria-label="Image suivante">›</button>}
      {total > 1 && <div className="counter" aria-live="polite">{current + 1}/{total}</div>}
    </div>
  )
}

Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string),
}

export default Carousel;