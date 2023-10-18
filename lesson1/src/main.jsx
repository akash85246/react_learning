import React from "react";
import ReactDOM from "react-dom/client";

var name = "Akash";
var surname = "Rajput";
const value = 8;

const loc = document.getElementById("root");
const root = ReactDOM.createRoot(loc);

const customeStyle = {
  color: "red",
  fontSize: "20px",
  backgroundColor: "silver",
  border: "20px solid black",
};

root.render(
  <>
    <h1
      className="heading"
      contentEditable="true"
      spellCheck="false"
      style={customeStyle}
    >
      Hello {name} {surname}
    </h1>
  </>
);
