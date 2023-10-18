import React from "react";
import ReactDOM from "react-dom/client";

var name = "Akash";
var surname = "Rajput";
const value = 8;

const loc = document.getElementById("root");
const root = ReactDOM.createRoot(loc);
root.render(
  <>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      Hello {name} {surname}
    </h1>
    <div>
      <img src="https://images.pexels.com/photos/5591708/pexels-photo-5591708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
      <img src="https://images.pexels.com/photos/194096/pexels-photo-194096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
      <img src="https://images.pexels.com/photos/3336993/pexels-photo-3336993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
      <img src="https://picsum.photos/200/300"></img>
    </div>
  </>
);
