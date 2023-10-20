import React, { useState } from "react";
import ToDoItem from "./Tile";
import Heading from "./Heading";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // To keep track of the item being edited.
  const [editTitle, setEditTitle] = useState(""); // To store the edited title.

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function handleTitleChange(event) {
    const newTitle = event.target.value;
    setEditTitle(newTitle);
  }

  function addItem() {
    if (editIndex !== null) {
      return;
    } else {
      setItems((prevItems) => [
        ...prevItems,
        { title: editTitle, text: inputText },
      ]);
      setInputText("");
      setEditTitle("");
    }
  }

  function deleteItem(id) {
    setItems((prevItems) => prevItems.filter((_, index) => index !== id));
  }

  function editItem(id) {
    // Set the inputText and editTitle to the text and title of the item being edited.
    setInputText(items[id].text);
    setEditTitle(items[id].title);
    setEditIndex(id);
  }

  function updateItem() {
    if (editIndex !== null) {
      items[editIndex] = { title: editTitle, text: inputText };
      setItems([...items]);
      setInputText("");
      setEditTitle("");
      setEditIndex(null);
    }
  }

  return (
    <div className="container">
      <Heading />
      <div className="form">
        <input
          style={{ width: "50%" }}
          onChange={handleTitleChange}
          type="text"
          value={editTitle}
          placeholder="Edit Title"
        />
        <input
          onChange={handleChange}
          type="text"
          value={inputText}
          placeholder="Edit Title"
          placeholder="Edit Description"
        />

        {editIndex !== null ? (
          <button onClick={updateItem}>
            <span>Save</span>
          </button>
        ) : (
          <button onClick={addItem}>
            <span>+</span>
          </button>
        )}
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <ToDoItem
              key={index}
              id={index}
              title={item.title}
              text={item.text}
              onChecked={deleteItem}
              onEdit={editItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
