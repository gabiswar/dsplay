import React from 'react';
import './style.scss';

function mainContainer(props) {
  return (
    <div className="main-container">
        <img src={props.mainLogo} alt="Logo" /> 
    </div>
  );
}

export default mainContainer;