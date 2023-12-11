import React, { useEffect } from 'react';
import twitterIcon from '../icons/icons8-twitter-circled.gif';
import instagramIcon from '../icons/icons8-instagram.gif';
import linkedinIcon from '../icons/icons8-linkedin-circled.gif';
import githubIcon from '../icons/icons8-github.gif';
import upwardArrowIcon from '../icons/icons8-upward-arrow.gif';
import '../css/styles.css';

const Footer = () => {
  useEffect(() => {
    const scrollUpButton = document.getElementById('scroll-up');

    const handleScroll = () => {
      if (scrollUpButton) {
        if (window.scrollY > 100) {
          scrollUpButton.style.display = 'block';
        } else {
          scrollUpButton.style.display = 'none';
        }
      }
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };

    if (scrollUpButton) {
      window.addEventListener('scroll', handleScroll);
      scrollUpButton.addEventListener('click', scrollToTop);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollUpButton) {
        scrollUpButton.removeEventListener('click', scrollToTop);
      }
    };
  }, []);

  return (
    <footer>
      <div className="socials-container">
        <div className="socials">
          <a href="#" target="_blank">
            <img src={twitterIcon} alt="Twitter" loading="lazy" className="socicon" />
          </a>
          <a href="https://www.instagram.com/silvio.alvarez.125/#" target="_blank">
            <img src={instagramIcon} alt="Instagram" loading="lazy" className="socicon" />
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin" loading="lazy" className="socicon" />
          </a>
          <a href="https://github.com/SilvioAlvarez/TPFINAL-CEPIT-2023" target="_blank">
            <img src={githubIcon} alt="Github" className="socicon" />
          </a>
          <i className="scroll-up" id="scroll-up">
        <img src={upwardArrowIcon} className="socicon up-arrow" alt="" />
      </i>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
