import React from 'react';
import ReactDOM from 'react-dom';
import Map from './components/map.jsx';

document.addEventListener("DOMContentLoaded", () => {
  const container = "map" 
  const center = [-122, 38]
  const zoom = 9
  const interactive = true
  const root = document.getElementById("root");
  ReactDOM.render(<Map/>, root);
});
