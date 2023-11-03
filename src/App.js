import React, { useState, useEffect } from 'react';
import './App.css';
import MainContainer from './components/main/mainContainer';
import SecondaryContainer from './components/secondary/secondaryContainer';
import { useMedia } from '@dsplay/react-template-utils';

function App() {
  let media = useMedia();
  let mainLogo = media.mainLogo;
  let seta = media.seta;
  let maxPageTimeSeconds = media.maxPageTimeSeconds;
  
  //Paginação
  const viewHeight = window.innerHeight;
  let itemsPerPage = 4;
  
  if (viewHeight <= 720) {
    itemsPerPage = 3;
  } else if (viewHeight <= 1080) {
    itemsPerPage = 5;
  } else if (viewHeight <= 1280) {
    itemsPerPage = 7;
  } else {
    itemsPerPage = 9;
  }
  let numberOfPage = media.events.length;
  let duration = (media.duration - 1000) / numberOfPage;
  let timePage = duration > maxPageTimeSeconds ? maxPageTimeSeconds : duration ;

let timeoutInterval = timePage;
let [currentPage, setCurrentPage] = useState(1);
let [visibleEvents, setVisibleEvents] = useState([]);

useEffect(() => {
  const events = media.events;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentEvents = events.slice(startIndex, endIndex);

  setVisibleEvents(currentEvents);

  const timer = setTimeout(() => {
    if (endIndex < events.length) {
      setCurrentPage(currentPage + 1);
    } else {
      // Reinicia
      setCurrentPage(1);
    }
  }, timeoutInterval);

  return () => clearTimeout(timer);
}, [media.events, currentPage]);

return (
  <div className="app-container">
    <MainContainer mainLogo={mainLogo}></MainContainer>
    {visibleEvents.map((data, index) => (
      <SecondaryContainer
        key={index}
        logo={data.logo}
        direction={data.direction}
        name={data.name}
        place={data.place}
        floor={data.floor}
        seta={seta}
      ></SecondaryContainer>
    ))}
  </div>
);
}

export default App;