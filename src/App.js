import React, { useState, useEffect } from 'react';
import './App.css';
import HeaderContainer from './components/header/HeaderContainer';
import TableContainer from './components/table/TableContainer';
import { useMedia, Loader, useScreenInfo } from '@dsplay/react-template-utils';
import Intro from './components/intro';

const MIN_LOADING_DURATION = 2800;

// fonts to preload
// @font-face's must be defined in fonts.sass or another in-use style file
const fonts = [
  'Roboto Condensed',
];
function App() {
  let media = useMedia();
  const { screenFormat } = useScreenInfo();
  // const moedas = [
  //   { currency: 'USD', weBuy: 1.2, weSell: 1.1 },
  //   { currency: 'EUR', weBuy: 1.5, weSell: 1.4 },
  //   // Adicione mais dados conforme necessário
  // ];

  const moedas = media.moedas;
  
  return (
    <Loader
      placeholder={<Intro />}
      fonts={fonts}
      minDuration={MIN_LOADING_DURATION}
    >
      <div className={`app-container fade-in ${screenFormat}`}>
        <HeaderContainer></HeaderContainer>
        {moedas.map((data, index) => (
          <TableContainer 
            key={index} 
            flag={data.flag}
            currency={data.currency}
            weSell={data.weSell}
            weBuy={data.weBuy}
          ></TableContainer>
        ))}
      </div>

    </Loader>
  );
}

export default App;