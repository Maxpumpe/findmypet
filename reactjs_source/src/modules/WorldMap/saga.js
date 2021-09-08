import { put, all, call, takeLatest } from "redux-saga/effects";
import { request } from '../../helpers/requests';
import { browserRedirect } from '../../helpers/helpers';
import { urls } from '../../helpers/urls';
import mapboxgl from 'mapbox-gl';
import {
  WORLDMAP_PAGE_INIT
} from "./actions";

//Login API call
function worldCall(payload) {
  return request('post', urls.LOGIN_URL, payload);
}

// LOGIN Worker
function* worldWorker({ payload }) {
    console.log("Saga:", payload)


    try {
        
  } catch (err) {
    
  }
}

// world Watcher
export default function* worldSaga() {
  yield all([
    takeLatest(WORLDMAP_PAGE_INIT, worldWorker),
  ]);
}

function createMap() {
    
    const locator = {lng: 13.404954,lat: 52.520008,zoom: 10};
const {lng, lat, zoom} = locator;
mapboxgl.accessToken = 'pk.eyJ1IjoibWF4cHVtcGUiLCJhIjoiY2pwdjZleG1yMG9oNjN4bzk0OTRrOXB6NiJ9.8Jt5dEyEdxDVqkJ2EYhqNg';
let map = new mapboxgl.Map({
                        container: 'map',
                        style: 'mapbox://styles/mapbox/streets-v9',
                        center: [lng, lat],
                        zoom: 9,
});


// Create a default Marker and add it to the map.
const marker1 = new mapboxgl.Marker()
.setLngLat([52.510008,13.424954])
.addTo(map);
 
// Create a default Marker, colored black, rotated 45 degrees.
const marker2 = new mapboxgl.Marker({ color: 'black', rotation: 45 })
.setLngLat([13.414954,52.510008])
.addTo(map);  
}