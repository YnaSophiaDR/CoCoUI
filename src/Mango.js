// Mango.js
import React from 'react';

function Mango(props) {
  return (
    <div className="mango">
      <img src={props.mangoObj.photoName} alt={props.mangoObj.name} className="mango-img"/>
      <div className="mango-details">
        <p>{props.mangoObj.name}</p>
      </div>
    </div>
  );
}

export default Mango;
