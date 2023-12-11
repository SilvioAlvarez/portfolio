import React from 'react';
import '../css/styles.css';
import projectImage from '../icons/proyectofoto.jpg';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">Algunos de mis proyectos recientes</h2>
      <div className="projects-container">
        <div className="project-container project-card">
          <a href="#" target="_blank"></a>
          <img
            src={projectImage}
            alt="Gestor de Escuelas"
            loading="lazy"
            className="project-pic"
            style={{ width: '100%' }}
          />
          <h3 className="project-title">Gestor de Escuelas</h3>
          <p className="project-details">
            Este proyecto proporciona funcionalidades para alumnos, profesores y padres/tutores.
          </p>
          <a href="https://tp-final-39700.web.app/" target="_blank" className="project-link">Conócelo</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
