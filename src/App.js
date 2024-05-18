import React, { useState, useEffect, Component } from "react";
import List from "./components/list";
import Header from "./components/header";
import "leaflet/dist/leaflet.css";
import { getPlacesData } from "./api/api";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Chip, Paper, Typography, useMediaQuery } from "@material-ui/core";
// import Rating from "material-ui-rating"
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [filteredMarkers, setFilteredMarkers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const isdesktop = useMediaQuery("(min-width:600px)");
  const post = [19.13995270460187, 72.83145614982841];
  const [childclicked, setChildClicked] = useState(null);


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

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(
  //     ({ coords: { latitude, longitude } }) => {
  //       setCoords({ lat: latitude, lng: longitude });
  //     }
  //   );
  //   console.log(coords);
  // }, []);

  useEffect(() => {
    setIsLoading(true);
    getPlacesData().then((data) => {
      setPlaces(data);
      const filteredMarkers = data.filter(
        (marker) =>
          marker.latitude !== undefined && marker.longitude !== undefined
      );
      setFilteredMarkers(filteredMarkers);
      setIsLoading(false);
    });
  }, []);

  // console.log(childclicked);

  return (
    <div className="main_app">
      <div className="main_app_header">
        <Header />
      </div>
      <div className="main_map_list_cont">
        <div className="map_cont">
          <MapContainer
            className="map_cont_style"
            center={post}
            zoom={15}
            scrollWheelZoom={true}
            onChildClick={(child) => setChildClicked(child)}

          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

              
            {filteredMarkers.map((data, i) => (
              <Marker
                position={[data.latitude, data.longitude]}
                icon={markericon}
                key={i}
              >
                <Popup className="popup">
                  <div className="popup_images">
                    <Paper elevation={3}>
                      <Typography variant="subtitle2" gutterBottom>
                        {" "}
                        {data.name}
                      </Typography>
                      <img
                        src={
                          data.photo
                            ? data.photo.images.small.url
                            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                        }
                      />
                    </Paper>
                  </div>
                </Popup>
              </Marker>
            ))}

            
          </MapContainer>
        </div>

        {isLoading ? (
          <div id="cover-spin"></div>
        ) : (
          <div className="main_list">
            <List childclicked = {childclicked} places={places} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
