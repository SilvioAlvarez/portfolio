import React from 'react';
import '../css/styles.css';
import logoUPSO from '../icons/logo-UPSO1.png';
import logoCEPIT from '../icons/cepit.jpg';

const EducationList = () => {
  const educationData = [
    {
      institution: 'CEPIT (Cámara de Empresas del Polo Informático de Tandil)',
      degree: 'Desarrollador Full Stack Junior',
      startDate: '02/2022',
      endDate: '12/2023',
      logo: logoCEPIT,
    },
    {
      institution: 'UPSO (Universidad Provincial del Sudoeste)',
      degree: 'Tecnicatura Universitaria en Emprendimientos Informáticos',
      logo: logoUPSO,
    },
  ];

  return (
    <section className="hero" id="education">
      <div className="bio animate__animated animate__shakeX">
        <h2 className="estudio-title">Historial Educativo</h2>
        <div className="education-list">
          {educationData.map((education, index) => (
            <div className="Education" key={index}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {education.logo && (
                  <img
                    src={education.logo}
                    alt={`${education.institution} logo`}
                    className="institution-logo"
                    style={{ width: '140px', height: 'auto', marginRight: '10px', marginTop: '-12px' }}

                  />
                )}
                <div style={{ marginLeft: education.logo ? '10px' : '0' }}>
                  <h3 className="institucion">{education.institution}</h3>
                  <h3 className="titulo">{education.degree}</h3>
                  <h3 className="fecha">{education.startDate} - {education.endDate}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationList;
