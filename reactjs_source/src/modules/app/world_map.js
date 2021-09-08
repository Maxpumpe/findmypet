import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import ResClient from 'resclient';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import './map.css';

mapboxgl.accessToken = 'pk.eyJ1IjoibWF4cHVtcGUiLCJhIjoiY2pwdjZleG1yMG9oNjN4bzk0OTRrOXB6NiJ9.8Jt5dEyEdxDVqkJ2EYhqNg';

export default class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            lng: 13.404954,
            lat: 52.520008,
            zoom: 10
        };
        this.mapContainer = React.createRef();
        this.errorTimer = null;
        this.client = new ResClient("ws://dev-nook.de:4223");
        console.info("WebSocket status:", this.client);
    }
    componentDidMount() {

// Get the collection from the WebSocket Service.
        this.client.get('pets.status').then(pets => {
            this.setState({pets});
        }).catch(this.showError);


        const geojson = {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'properties': {
                        'message': 'Katze Foo entlaufen',
                        'iconSize': [60, 60]
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [13.754954, 52.240008]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'message': 'Kater Bar entlaufen',
                        'iconSize': [50, 50]
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [13.354954, 52.440008]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'message': 'Kater Baz entlaufen',
                        'iconSize': [40, 40]
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [13.254954, 52.440008]
                    }
                }
            ]
        };


        const {lng, lat, zoom} = this.state;
        const map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
        map.addControl(new mapboxgl.FullscreenControl());
        // Add the control to the map.
        map.addControl(
                new MapboxGeocoder({
                    accessToken: mapboxgl.accessToken,
                    mapboxgl: mapboxgl
                })
                );
        const marker1 = new mapboxgl.Marker(
                {
                    color: "#00FFFF",
                    draggable: true
                }
        )
                .setLngLat([13.724954, 52.210008])
                .addTo(map);
        marker1.setDraggable(true);

        // Add markers to the map.
        for (const marker of geojson.features) {
// Create a DOM element for each marker.
            const el = document.createElement('div');
            const width = marker.properties.iconSize[0];
            const height = marker.properties.iconSize[1];
            el.className = 'marker';
            el.style.backgroundImage = `url(https://placekitten.com/g/${width}/${height}/)`;
            el.style.width = `${width}px`;
            el.style.height = `${height}px`;
            el.style.backgroundSize = '100%';

            el.addEventListener('click', () => {
                window.alert(marker.properties.message);
            });

// Add markers to the map.
            new mapboxgl.Marker(el)
                    .setLngLat(marker.geometry.coordinates)
                    .addTo(map);
        }


// Create a default Marker, colored black, rotated 45 degrees.
        const marker2 = new mapboxgl.Marker({color: 'black', rotation: 0})
                .setLngLat([13.214954, 52.810008])
                .addTo(map);


        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });
    }

    showError = (err) => {
        // Set error and clear it after 5 seconds
        console.info("WebSocket error:",err);
        this.setState(state => ({
                error: err && err.code && err.code == 'system.connectionError'
                        ? "Connection error. Are NATS Server and Resgate running?"
                        : err && err.message ? err.message : String(err)
            }));
        clearTimeout(this.errorTimer);
        this.errorTimer = setTimeout(() => this.setState(state => ({
                    error: ""
                })), 5000);
    }

    render() {
        const {lng, lat, zoom} = this.state;
        return (
                <div>
                    <div className="sidebar">
                        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                    </div>
                    <div ref={this.mapContainer} className="map-container" />
                </div>
                );
    }
}