import React, { useEffect, useState } from "react";
import MapComponent from "../components/MapComponent";

const MainContainer = () => {
  const [castlesList, setCastlesList] = useState([]);

  useEffect(() => {
    fetch("https://castles-of-scotland.herokuapp.com/api/castles")
      .then((res) => res.json())
      .then((data) => {
        setCastlesList(data);
      })
      .then();
  }, []);
  return (
    <>
      <h1>Castles of Scotland</h1>
      <MapComponent castlesList={castlesList} />
    </>
  );
};

export default MainContainer;
