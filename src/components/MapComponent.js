import React, { useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "../styles/map.css";

const MapComponent = ({ castlesList }) => {
  const [activeCastle, setActiveCastle] = useState();

  return (
    <MapContainer center={[56.799, -4.298]} zoom={7}>
      {castlesList.map((castle) => (
        <Marker
          key={castle._id}
          position={[castle.coordinates[0], castle.coordinates[2] * -1]}
        >
          <Popup>
            <div>
              <h2>{castle.name}</h2>
              <a href={castle.link}>Wikipedia</a>
            </div>
          </Popup>
        </Marker>
      ))}

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default MapComponent;

// 56.79930759440278, -4.298715168559286;
