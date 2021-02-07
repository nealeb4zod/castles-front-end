import React, { useEffect, useState } from "react";

const MainContainer = () => {
  const [castles, setCastles] = useState([]);

  useEffect(() => {
    fetch("https://castles-of-scotland.herokuapp.com/api/castles")
      .then((res) => res.json())
      .then((data) => {
        setCastles(data);
      })
      .then();
  }, []);
  return null;
};

export default MainContainer;
