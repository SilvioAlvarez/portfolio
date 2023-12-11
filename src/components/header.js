import React, { useState } from 'react';
import '../css/styles.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <h1>PROGRAMADOR FULL STACK SILVIO ALVAREZ</h1>
      <button className={`burger-menu ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
      <ul className={`navigation ${menuOpen ? 'open' : ''}`}>
        <li><a href="#about" className="nav-link" onClick={toggleMenu}>Sobre mi</a></li>
        <li><a href="#skills" className="nav-link" onClick={toggleMenu}>Habilidades</a></li>
        <li><a href="#projects" className="nav-link" onClick={toggleMenu}>Proyectos</a></li>
        <li><a href="#education" className="nav-link" onClick={toggleMenu}>Estudios</a></li>
        <li><a href="#curriculum" className="nav-link" onClick={toggleMenu}>Curriculum</a></li>
        <li><a href="#contact" className="nav-link" onClick={toggleMenu}>Contáctame</a></li>
      </ul>
    </nav>
  );
};

export default Header;