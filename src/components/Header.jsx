import { NavLink } from "react-router-dom";
import { useContext } from 'react';
import "../styles/Header.scss";
import { ThemeContext } from '../context/ThemeContext';

function Header() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <header className="header" role="banner">
      <div className="logo" aria-label="Logo Kasa">Kasa</div>
      <nav aria-label="Menu principal">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          Accueil
        </NavLink>
        <NavLink to="/a-propos" className={({ isActive }) => (isActive ? "active" : "")}>
          À propos
        </NavLink>
        <button onClick={toggleTheme} aria-label="Changer le thème">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </nav>
    </header>
  );
}

export default Header;