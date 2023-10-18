import React from "react";
import ReactDOM from "react-dom/client";
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

import { add, multiply, subtract, divided } from "./App";

root.render(
  <ul>
    <li>{add(1, 2)}</li>
    <li>{multiply(1, 2)}</li>
    <li>{subtract(1, 2)}</li>
    <li>{divided(1, 2)}</li>
  </ul>
);
