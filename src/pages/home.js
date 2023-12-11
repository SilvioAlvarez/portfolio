import React from 'react';
import Header from '../components/header';
import AboutMe from '../components/aboutMe';
import Skills from '../components/skills';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Footer from '../components/footer';
import EducationList from '../components/educationList';
import Curriculum from '../components/cvubicacion';
import '../css/styles.css';

const Home = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      <EducationList />
      <Skills />
      <Projects />
      <Curriculum />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
