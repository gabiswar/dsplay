import React from 'react';
import './style.scss';

function HeaderContainer(props) {
  return (
    <div className="main-header">
      <div className="header">
        <p>Moeda</p>
      </div>
      <div className="header">
        <p>Compra (INR)</p>
      </div>
      <div className="header">
        <p>Venda (INR)</p>
      </div>
    </div>
  );
}

export default HeaderContainer;
