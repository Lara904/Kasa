import { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import "../styles/Dropdown.scss"

function Dropdown({ title = "Titre", children = "Contenu indisponible" }) {
  const [open, setOpen] = useState(false)
  const contentRef = useRef(null)
  const [height, setHeight] = useState('0px')

  useEffect(() => {
    if (open && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`)
    } else {
      setHeight('0px')
    }
  }, [open])

  return (
    <div className="dropdown">
      <button
        className="dropdown-header"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={`dropdown-content-${title}`}
      >
        <h3>{title}</h3>
        <span className={`arrow ${open ? 'open' : ''}`}>⌄</span>
      </button>
      <div
        id={`dropdown-content-${title}`}
        className="dropdown-content"
        ref={contentRef}
        style={{ maxHeight: height }}
      >
        <div className="dropdown-inner">{children}</div>
      </div>
    </div>
  )
}

Dropdown.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export default Dropdown