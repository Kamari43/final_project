import React, {useState} from "react";
import GoogleMapReact from 'google-map-react';
import Geocode from "react-geocode";

const AnyReactComponent = ({ text }) => <div className="card"><div className="card-text">{text}</div> </div>;

export default function SimpleMap(){
    Geocode.setApiKey("AIzaSyCGfTLJCe-AIzaSyD3ons1SrA7rmRhr56nKyF92s_fJSHOESI");
    const [marker, setMarker] = useState({id: "FAMU Financial Aid", lat: 30.431709, lng: -84.285744});
    const defaultProps = {
        center: {
            lat: 30.455004,
            lng: -84.253334,
        },
        zoom: 11
    };
    var updatePin = () =>{
        //get the text box

        // Get latitude & longitude from address.
        Geocode.fromAddress("Eiffel Tower").then(
            (response) => {
                const { lat, lng } = response.results[0].geometry.location;
                setMarker( {id:"1", lng: lng, lat: lat} )
            },
            (error) => {
                console.error(error);
            });
    }
    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>


            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDzWlPb7X6GqrvfWF6jykxaaYvJZqkO8kA" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    // required props
                    text={marker.id}
                    lat={marker.lat}
                    lng={marker.lng}/>
            </GoogleMapReact>
        </div>
    );

}

// let url = "https://www.google.com/maps/embed/v1/MAP_MODE?key=AIzaSyD3ons1SrA7rmRhr56nKyF92s_fJSHOESI&callback=initMap";




//export default TipnitGoogle;