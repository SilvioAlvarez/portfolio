import React from 'react';

const Experience = ({ title, description, startDate, endDate }) => (
  <div>
    <h3>{title}</h3>
    <p>{description}</p>
    <p>
      <strong>Fecha de inicio:</strong> {startDate}
    </p>
    <p>
      <strong>Fecha de finalización:</strong> {endDate}
    </p>
  </div>
);

export default Experience;