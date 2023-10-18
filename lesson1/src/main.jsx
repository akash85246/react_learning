import React from "react";
import ReactDOM from "react-dom/client";

var name = "Akash";
var surname = "Rajput";
const value = 8;

const loc = document.getElementById("root");
const root = ReactDOM.createRoot(loc);
root.render(
  <>
    <h1>
      Hello {name} {surname}
    </h1>
    <p>Lucky number is {Math.floor(Math.random() * value) + 1}</p>
  </>
);
