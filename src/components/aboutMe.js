import React from 'react';
import '../css/styles.css';
import projectImage from '../icons/desarrollador.jpg';

const AboutMe = () => {
  return (
    <section className="hero" id="about">
   <img
            src={projectImage}
            alt="Gestor de Escuelas"
            loading="lazy"
            className="hero-img"
           
          />
      <div className="bio animate__animated animate__shakeX">
  <h2 className="bio-title">Sobre mi</h2>
  <p className="bio-text">
    Mi conexión con el mundo del desarrollo ha sido impulsado por la curiosidad y el deseo constante de aprender.
  
    En el año 2022-2023 transité la carrera Desarrollador Full Stack en la Cámara de Empresas del Polo Informático de Tandil (CEPIT), desarrollando habilidades para trabajar tanto en el lado del cliente como en el del servidor que me permite abordar proyectos de manera integral, asegurando una experiencia del usuario fluida y un rendimiento eficiente.
  
    Con sólidos conocimientos en tecnologías como JavaScript, React, Node.js, y bases de datos MySQL. Me considero una persona responsable, organizada y con muchas ganas de seguir aprendiendo.
  </p>
</div>
    </section>
  );
};

export default AboutMe;