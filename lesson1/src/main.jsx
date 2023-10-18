import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function App() {
  const [date, setDate] = useState(new Date());
  const name = "Akash";
  const surname = "Rajput";

  setInterval(() => {
    setDate(new Date());
  }, 100);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  const milis = date.getMilliseconds();

  return (
    <div>
      <h1>My Watch</h1>
      <h2>{"Date " + day + " Month " + month + " Year " + year}</h2>
      <h2>{hour + " : " + min + " : " + sec + " : " + milis}</h2>
      <h3>Created by {name + " " + surname}</h3>
    </div>
  );
}

const loc = document.getElementById("root");
const root = ReactDOM.createRoot(loc);
root.render(<App />);
