import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';

const EMAILJS_USER_ID = 'KORNvEmTqToAhZRkq';
const EMAILJS_SERVICE_ID = 'service_99bdq3h';
const EMAILJS_TEMPLATE_ID = 'template_690090f';

const Contact = () => {
  const [formularioVisible, setFormularioVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const mostrarFormulario = () => {
    setFormularioVisible(true);
  };

  const manejarCambioInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const manejarEnvioFormulario = async (e) => {
    e.preventDefault();

    try {
      // Enviar correo electrónico
      const emailParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        emailParams,
        EMAILJS_USER_ID
      );

      // Mostrar notificación de éxito
      toast.success('Correo y mensaje enviados con éxito', {
        position: 'bottom-right',
        autoClose: 3000,
      });

      setFormularioVisible(false);
    } catch (error) {
      console.error('Error en el envío del formulario:', error);
    }
  };


  return (
    <div className="contact" id="contact">
      <h2 className="contact-title">Formulario de contacto</h2>
      <div className="contact-form-container">
        {formularioVisible ? (
          <form onSubmit={manejarEnvioFormulario}>
            <div className="form-group">
              <div className="form-row">
                <div className="col">
                  <label htmlFor="name">Tu nombre</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={manejarCambioInput}
                    className="input-field"
                    placeholder="Ingresa tu nombre"
                    required
                  />
                </div>
                <div className="form-group">
              <label htmlFor="email">Tu correo electrónico</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={manejarCambioInput}
                className="input-field"
                placeholder="Ingresa tu correo electrónico"
                required
              />
            </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Tu mensaje</label>
              <textarea
                placeholder="Escribe tu mensaje"
                name="message"
                value={formData.message}
                onChange={manejarCambioInput}
                className="input-field"
                rows="10"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Enviar
            </button>
          </form>
        ) : (
          <button onClick={mostrarFormulario} className="submit-btn">
            Contáctame
          </button>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
