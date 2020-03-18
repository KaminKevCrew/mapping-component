import React from "react";
import mapboxgl from 'mapbox-gl'


class Map extends React.Component {
  constructor(props) {
    super(props);
    // your code here
  }

  componentDidMount() {
    this.map()
  }

  map(container="map", center=[-122, 38], zoom=9, interactive=true) {
    mapboxgl.accessToken = 'pk.eyJ1Ijoia2FtaW5rZXZjcmV3IiwiYSI6ImNrMGUydnoxbzBkbHgzY3IxOGZmcWN6dHAifQ.K2wzWQ-7KEhyUxXFR48aTA';

    let map = new mapboxgl.Map({
      container: container,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: center,
      zoom: zoom,
      interactive: interactive
    });

    map.on('load', function () {
      map.addLayer({
        id: 'rpd_parks',
        type: 'fill',
        source: {
          type: "vector",
          url: "mapbox://mapbox.3o7ubwm8"
        },
        'source-layer': 'RPD-Parks',
        layout: {
          visibility: 'visible'
        },
        paint: {
          'fill-color': 'rgba(61, 153, 80, 0.55)'
        }
      });
    })
  };



  render() {
    return (
      <div id="map"></div>
    );
  }
}

export default Map;