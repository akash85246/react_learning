import Heading from "./heading";
import { useState } from "react";

export default function App() {
  const [date, setDate] = useState(new Date());



  function time(){
      setInterval(() => {
        setDate(new Date());
      }, 1000);
  }
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  const milis = date.getMilliseconds();

  return (
    <div>
      <Heading h="My Watch" />
      <h2>{"Date " + day + " Month " + month + " Year " + year}</h2>
      <h2>{hour + " : " + min + " : " + sec + " : " + milis}</h2>
      <Heading h="Created by Akash" />
      <button onClick={time}>Click Me</button>
    </div>
  );
}
