import React, {Component} from 'react';
import { connect,useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import './map.css';
import PropTypes from 'prop-types';
import { worldMapPageInit }  from './actions';
import store from "../../config/store";
import mapboxgl from 'mapbox-gl';


class WorldMap extends Component {
    constructor(props){
        super(props);
        this.state = {
            xx: 'otto',
            value: props.counterxxx
        
        }

    }
    
componentDidMount() {
    //store.dispatch(worldMapPageInit("payloadvalue2"));

  }

    render(){

        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                    <div id="map"></div>teste dies.... {this.state.value.counter}
                    </div>
                </div>
              
            </div>
        );
    }
}

WorldMap.propTypes = {

};

function mapStateToProps(state){

    return { 
    counterxxx: state.map 
    };
}

function mapDispatchToProps(dispatch) {
    return {
      onPageInit: dispatch(worldMapPageInit("payloadvalue1"))


    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withRouter(WorldMap));

/*      const locator = {lng: 13.404954,lat: 52.520008,zoom: 10};
const {lng, lat, zoom} = locator;
mapboxgl.accessToken = 'pk.eyJ1IjoibWF4cHVtcGUiLCJhIjoiY2pwdjZleG1yMG9oNjN4bzk0OTRrOXB6NiJ9.8Jt5dEyEdxDVqkJ2EYhqNg';
map = new mapboxgl.Map({
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
*/