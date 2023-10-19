export default function Tile() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });
  const dat = date.getDate();
  return (
    <div className="tile" contentEditable="true" spellCheck="false">
      <h2 className="noteTitle">Title</h2>
      <h3 className="date titleBody">{month + " " + dat + " " + year}</h3>
      {/* <p>hdsgd</p> */}
      <p contentEditable="true" spellCheck="false">
        {" "}
        description
      </p>
      <div className="button">
        <button className="butt b1">edit</button>
        <button className="butt b2">remove</button>
      </div>
    </div>
  );
}
