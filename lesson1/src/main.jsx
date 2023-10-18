import React from "react";
import ReactDOM from "react-dom";

function MovieList() {
  return (
    <>
      <h1>MY FAVORITE MOVIES 2023</h1>
      <ul style={{ listStyle: "none" }}>
        <li>
          <h2>SMILE</h2>
          <img
            src="./src/assets/smile-poster.jpeg"
            alt="POSTER1"
            style={{
              height: 500,
            }}
          />
        </li>
        <li>
          <h2>MEGAN</h2>
          <img
            src="./src/assets/megan.jpg"
            alt="POSTER2"
            style={{
              height: 500,
            }}
          />
        </li>
        <li>
          <h2>BULBBUL</h2>
          <img
            src="./src/assets/bulbbul_poster.jpg"
            alt="POSTER3"
            style={{
              height: 500,
            }}
          />
        </li>
      </ul>
    </>
  );
}

const rootElement = document.getElementById("root");

ReactDOM.render(<MovieList />, rootElement);
