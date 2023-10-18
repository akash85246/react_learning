// import React from "react";
// import ReactDOM from "react-dom/client";

// var name = "Akash";
// var surname = "Rajput";
// const value = 8;

// const loc = document.getElementById("root");
// const root = ReactDOM.createRoot(loc);

// const customeStyle = {
//   color: "red",
//   fontSize: "20px",
//   backgroundColor: "silver",
//   border: "20px solid black",
// };

// root.render(
//   <>
//     <h1
//       className="heading"
//       contentEditable="true"
//       spellCheck="false"
//       style={customeStyle}
//     >
//       Hello {name} {surname}
//     </h1>
//   </>
// );

// import React from "react";

// import ReactDOM from "react-dom/client";
// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);

// const date = new Date();
// const hour = date.getHours();

// root.render(
//   <>
//     <h1>Hello friends</h1>
//     {hour > 0 && hour < 12 && <h2 style={{ color: "red" }}>Good morning</h2>}
//     {hour > 12 && hour < 18 && (
//       <h2 style={{ color: "green" }}>Good afternoon</h2>
//     )}
//     {hour > 18 && <h2 style={{ color: "blue" }}>Good evening</h2>}
//   </>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./App";
import List from "./List";
const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);
root.render(
  <>
    <Heading />
    <List />
  </>
);
