// src/components/PersonList.js
import React from 'react';
// import './PersonList.css'; // Add responsive styles in CSS

const PersonList = ({ people }) => {
  return (
    <div className="person-list">
      {people.map((person, index) => (
        <div className="person-card" key={index}>
          <h3>{person.name}</h3>
          <p>Email: {person.email}</p>
          <p>Type: {person.type}</p>
        </div>
      ))}
    </div>
  );
};

export default PersonList;
