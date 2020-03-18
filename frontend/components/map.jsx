import React from "react";
import mapboxgl from 'mapbox-gl'


class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(container = "map", center = [-122, 38], zoom = 9, interactive = true) {
    mapboxgl.accessToken = 'pk.eyJ1Ijoia2FtaW5rZXZjcmV3IiwiYSI6ImNrMGUydnoxbzBkbHgzY3IxOGZmcWN6dHAifQ.K2wzWQ-7KEhyUxXFR48aTA';

    this.map = new mapboxgl.Map({
      container: container,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: center,
      zoom: zoom,
      interactive: interactive
    });

    let map = this.map

    map.on('load', function () {
      map.addControl(new mapboxgl.NavigationControl());
      map.addLayer({
        id: 'rpd_parks',
        type: 'fill',
        source: {
          type: "vector",
          url: "mapbox://mapbox.3o7ubwm8"
        },
        'source-layer': 'RPD_Parks',
        layout: {
          visibility: 'visible'
        },
        paint: {
          'fill-color': 'rgba(61, 153, 80, 0.55)'
        }
      });
    })
  };

  mapAddSource(map) {
    let validSourceTypes = {
      vector,
      raster,
      geojson,
      image,
      video
    }
    map.addSource('places', {

    })
  }

  render() {
    return (
      <div id="map"></div>
    );
  }
}

export default Map;