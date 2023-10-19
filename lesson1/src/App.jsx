import React, { useState } from "react";
import Heading from "./Heading";
import Tile from "./Tile";
import Footer from "./Footer";

export default function App() {
  const [tiles, setTiles] = useState([]);

  const addNewTile = () => {
    setTiles([...tiles, <Tile key={tiles.length} />]);
  };

  return (
    <>
      <Heading /> 
      <button className="new" onClick={addNewTile}>
        +
      </button>

      <div className="page-container">
        {tiles.map((tile, index) => (
          <div className="tile-container" key={index}>
            {tile}
          </div>
        ))}
      </div>
      
      <Footer />
    </>
  );
}
