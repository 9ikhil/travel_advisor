import React from "react";


import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import "leaflet/dist/leaflet.css";
import L from "leaflet";



const Maps = ({markers}) => {

  

  const isdesktop = useMediaQuery("(min-width:600px)");
  const post = [19.13995270460187, 72.83145614982841];

  const markericon = new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],


  });

  console.log(markers);










  return (
    <div className="map_cont">
      <MapContainer
        className="map_cont_style"
        center={post}
        zoom={10}
        scrollWheelZoom={true}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      
        
          
    {
      <Marker
            // position={Number[filteredMarkers.latitude, filteredMarkers.longitude]}
            icon={markericon}
            key={3}
          >
      
            <Popup>this is your place</Popup>
          </Marker>
    }

          

          
          
      
      </MapContainer>
    </div>
  );
};

export default Maps;
