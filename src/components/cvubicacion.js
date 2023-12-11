import React, { useState } from 'react';
import '../css/styles.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import projectImage from '../icons/Miubicación.jpg';

const Curriculum = () => {
  const [showLocation, setShowLocation] = useState(false);

  // Función para manejar el clic en el botón de ubicación
  const handleLocationButtonClick = () => {
    setShowLocation(!showLocation);
  };

  // Función para abrir Google Maps en una nueva pestaña
  const openGoogleMaps = () => {
    window.open(
      'https://www.google.es/maps/place/Cmte.+Luis+Piedrabuena+1051,+B8150DPU+Coronel+Dorrego,+Provincia+de+Buenos+Aires/@-38.7423009,-61.2747861,12.92z/data=!4m5!3m4!1s0x9592acf90c4cdb29:0xaa46fec00dd80a7d!8m2!3d-38.7278719!4d-61.2842524?entry=ttu',
      '_blank'
    );
  };

  return (
    <section className="contact" id="contact">
      <h2 className="contact-title" id= "curriculum">Curriculum</h2>

      {/* Botón para ver el CV en Google Drive */}
      <a href="https://drive.google.com/file/d/1ItVTnLYJRNyN8LwVuSa_5_RATw20QVhT/view?usp=drive_link" target="_blank" className="cv-button">
        Ver CV
      </a>
      <a href="https://drive.google.com/file/d/164mlRXU3NuPViUtN-jsf0b3D60iYfHIA/view?usp=drive_link" target="_blank" className="cv-button">
        Resume Job
      </a>

      {/* Botón de ubicación */}
      <div className="location-container">
        <button
          className={`location-icon${showLocation ? ' active' : ''}`}
          onMouseDown={handleLocationButtonClick}
          onMouseUp={handleLocationButtonClick}
          onTouchStart={handleLocationButtonClick}
          onTouchEnd={handleLocationButtonClick}
        >
          <FaMapMarkerAlt />
        </button>

        {/* Modal de ubicación */}
        {showLocation && (
          <div className="modal" onClick={handleLocationButtonClick}>
            <div className="modal-content">
              <img
                src={projectImage}
                alt="Ubicación"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Tarjeta de ubicación si el clic está activo */}
      {showLocation && (
        <div className="location-card">
          {/* Contenido de la tarjeta de ubicación */}
          <p>Tu Ubicación:</p>
          <a
            href="https://www.google.es/maps/place/Cmte.+Luis+Piedrabuena+1051,+B8150DPU+Coronel+Dorrego,+Provincia+de+Buenos+Aires/@-38.7423009,-61.2747861,12.92z/data=!4m5!3m4!1s0x9592acf90c4cdb29:0xaa46fec00dd80a7d!8m2!3d-38.7278719!4d-61.2842524?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver en Google Maps
          </a>
        </div>
      )}
    </section>
  );
};

export default Curriculum;
