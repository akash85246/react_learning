import React from "react";
import Login from "./Login";
var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {userIsRegistered ? <h1>Namaste India</h1> : <Login />}
    </div>
  );
}

export default App;
