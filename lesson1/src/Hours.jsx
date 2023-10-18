import React from "react";

export default function Hours() {
  const date = new Date();
  const hour = date.getHours();
  return (
    <>
      {hour > 0 && hour < 12 && <h2 style={{ color: "red" }}>Good morning</h2>}
      {hour > 12 && hour < 18 && (
        <h2 style={{ color: "green" }}>Good afternoon</h2>
      )}
      {hour > 18 && <h2 style={{ color: "blue" }}>Good evening</h2>}
    </>
  );
}
