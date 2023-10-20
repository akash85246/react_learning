import React from "react";

function ToDoItem(props) {
  const date = new Date();
  const year = date.getFullYear();
  const da = date.getDate();
  const month = date.getMonth() + 1;

  return (
    <div style={{ display: "flex", flexDirection: "column" }} className="block">
      <div>
      <h3 style={{textAlign:"left"}}>{props.title}</h3>
        <li style={{ listStyleType: "none" }}>{props.text}</li>
      </div>
      <div style={{display:"flex"}}>
        <button
          onClick={() => {
            props.onChecked(props.id);
          }}
          className="button"
        >
          {" "}
          -
        </button>
        <button
          onClick={() => {
            props.onEdit(props.id);
          }}
          className="button"
        >
          edit
        </button>
        <div className="editDate">edited {da}/{month}/{year}</div>
      </div>
    </div>
  );
}

export default ToDoItem;