import React from 'react';
import ReactDOM from 'react-dom';
import Map from './components/map/map.jsx';

document.addEventListener("DOMContentLoaded", () => {
  let props = {
    container: "map", 
    center: [-122, 38],
    zoom: 9,
    interactive: true,
    coordinates: [[-122, 38], [-121, 37], [-120, 36]],
    data: undefined
  }
  
  const root = document.getElementById("root");
  ReactDOM.render(<Map {...props}/>, root);
});
