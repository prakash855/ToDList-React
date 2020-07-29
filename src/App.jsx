import React, { useState } from "react";
import ToDoList from "./ToDoList.js";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const itemEvent = (e) => {
    setInputList(e.target.value);
  };
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  const deleteItems = (id) => {
    // console.log("Deleted");
    setItems((old) => {
      return old.filter((arrEle, index) => {
        return index !== id;
      });
    });
  };
  return (
    <React.Fragment>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <h3>Add items</h3>
          <input
            type="text"
            placeholder="Enter Task Name"
            value={inputList}
            onChange={itemEvent}
          />
          <button onClick={listOfItems}>+</button>
          <ol>
            {items.map((m, index) => {
              return (
                <ToDoList
                  key={index}
                  id={index}
                  text={m}
                  onSelect={deleteItems}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </React.Fragment>
  );
};
export default App;
