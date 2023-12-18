import React, { useState } from 'react';
import './style.scss';

function SecondaryContainer(props) {
  
  const directionMap = {
    left: 0,
    down_right: 45,
    down: 90,
    down_left: 135,
    right: 180,
    up_left: 225,
    up: 270,
    up_right: 315,
  };
  
  let direction = directionMap[props.direction] || 0;
  const [rotation, setRotation] = useState(direction); // Valor inicial da rotação em graus

  return (
    <div className="secondary-container">
      <div className="left-content">
        <img src={props.logo} alt="Direção"/>
      </div>
      <div className="center-content">
        <p> {props.name} </p>
        <p className="description">{props.floor}</p>
      </div>
      <div className="right-content">
        <p> {props.place}</p>
        <img
          src={props.seta}
          alt="Direção"
          style={{
            transform: `rotate(${rotation}deg)`
          }}
          />
      </div>
    </div>
  );
}

export default SecondaryContainer;
