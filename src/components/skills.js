import React from 'react';
import htmlIcon from '../icons/icons8-html-5.svg';
import cssIcon from '../icons/icons8-css3.svg';
import jsIcon from '../icons/icons8-javascript.svg';
import bootstrapIcon from '../icons/icons8-bootstrap.svg';
import reactIcon from '../icons/icons8-react-native.svg';
import gitIcon from '../icons/icons8-git.svg';
import githubIcon from '../icons/icons8-github.gif';
import nestjsIcon from '../icons/nestjs-svgrepo-com.svg';
import '../css/styles.css';

const Skills = () => (
  <section className="skills" id="skills" style={{ marginTop: '-2rem' }}>
    <div></div>
    <h2 className="skill-header">Habilidades Técnicas</h2>

    <div className="skills-wrapper">
      <div className="first-set animate__animated animate__pulse">
        <img src={htmlIcon} alt="" loading="lazy" className="icon icon-card" />
        <img src={cssIcon} alt="" loading="lazy" className="icon icon-card" />
        <img src={jsIcon} alt="" loading="lazy" className="icon icon-card" />
      </div>

      <div className="second-set animate__animated animate__pulse">
        <img src={bootstrapIcon} alt="" loading="lazy" className="icon icon-card" />
        <img src={reactIcon} alt="" loading="lazy" className="icon icon-card" />
        <img src={gitIcon} alt="" loading="lazy" className="icon icon-card" />
        <img src={githubIcon} alt="" loading="lazy" className="icon icon-card" />
        <img src={nestjsIcon} alt="" loading="lazy" className="icon icon-card" />
      </div>
    </div>
  </section>
);

export default Skills;