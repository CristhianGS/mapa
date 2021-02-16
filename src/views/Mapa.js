import { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import * as cliente from "../data/cliente.json";
import avatar from "../data/img/donador1.svg";
import React, { Component } from 'react';



export default function Mapa() {
  const [selectedDonator, setSelectDonator] = useState(null);
  const [viewport, setViewport] = useState({
        width: "100v",
        height: "100vh",
        latitude: -0.224619,
        longitude: -78.516891,
        zoom: 10
      });
  
       useEffect(() => {
        const listener = e => {
          if (e.key === "Escape") {
            setSelectDonator(null);
          }
        };
        window.addEventListener("keydown", listener);
      }, []); 


      var lati=parseFloat(localStorage.getItem('latitude'));
      var longi=parseFloat(localStorage.getItem('longitude'));


  return (

    <div>
      { <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/dark-v10"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {cliente.donadores.map((Donadores) => (
          <Marker
            key={Donadores.properties.ID}
            latitude={lati}
            longitude={longi}
            
          >
            <button className="marker_btn" onClick={(e) => {
              e.preventDefault();
              setSelectDonator(Donadores);
            }}>
              <img src={avatar} alt="Donador" />
            </button>
          </Marker>
        ))}

        {selectedDonator ? (
          <Popup
          latitude={lati}
          longitude={longi}
            onClose={() => {
              setSelectDonator(null);
            }}
          >
            <div>
              <h3>{selectedDonator.properties.NAME}</h3>
              <h4>{selectedDonator.properties.NUMBER}</h4>
            </div>
          </Popup>
        ) : null

        } 
       
      </ReactMapGL> }
    </div>
   
  )
}