import React from "react";
import ReactDOM from "react-dom";
const container = document.getElementById("root");

function Card(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.img} alt="player img" />
      <p>{props.phone}</p>
      <p>{props.gmail}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(container);
root.render(
  <>
    <Card
      name="Akash"
      img="https://media.istockphoto.com/id/1434947710/photo/businessman-headphones-and-laptop-webinar-in-office-with-coffee-on-table-video-call-or.jpg?s=1024x1024&w=is&k=20&c=NvC5p29pg1jBXw-IEzCTYg3Mv1A11k8BGVFqRw-DCDk="
      phone="100000"
      gmail="adhdi@akgec.ac.in"
    />
    <Card
      name="Shiva"
      img="https://media.istockphoto.com/id/1434947710/photo/businessman-headphones-and-laptop-webinar-in-office-with-coffee-on-table-video-call-or.jpg?s=1024x1024&w=is&k=20&c=NvC5p29pg1jBXw-IEzCTYg3Mv1A11k8BGVFqRw-DCDk="
      phone="545450"
      gmail="adhdsddi@akgec.ac.in"
    />
  </>
);
