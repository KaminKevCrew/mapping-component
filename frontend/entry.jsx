import React from 'react';
import ReactDOM from 'react-dom';
import Map from './components/map.jsx';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Map/>, root);
});
