import React, { useState } from "react";

export default function Tile() {
  const date = new Date();
  const year = date.getFullYear();
  const sec = date.getSeconds();
  const month = date.toLocaleString("default", { month: "long" });

  const dat = date.getDate();

  const [isTileVisible, setTileVisible] = useState(true);
  const [title, setTitle] = useState("Title");

  const handleRemoveClick = () => {
    setTileVisible(false);
  };

  const handleEditClick = () => {
    const newTitle = prompt("Enter a new title:", title);
    if (newTitle !== null) {
      setTitle(newTitle);
    }
  };

  if (!isTileVisible) {
    return null;
  }

  return (
    <div className="container">
      <div className="tile">
        <h2 className="noteTitle" spellCheck="false">
          {title}
        </h2>
        <h3 className="date titleBody">{month + " " + dat + " " + year}</h3>
        <div className="button">
          <button className="butt b1" onClick={handleEditClick}>
            edit
          </button>
          <button className="butt b2" onClick={handleRemoveClick}>
            remove
          </button>
        </div>
      </div>
    </div>
  );
}
