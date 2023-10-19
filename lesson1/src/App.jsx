import React, { useState } from "react";
import Heading from "./Heading";
import Tile from "./Tile";
import Footer from "./Footer";

export default function App() {
  const [components, setComponents] = useState([]);

  const addNewComponent = () => {
    setComponents([<Tile key={components.length} />, ...components]);
  };

  return (
    <>
      <>
        <Heading />
        <button className="new" onClick={addNewComponent}>
          +
        </button>
      </>
      <div className="page-container">
        {components.map((component, index) => (
          <div className="tile-container" key={index + 3}>
            {component}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
