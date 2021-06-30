import React from "react";

const ToDoList = ({ item }) => {
  return (
    <div className="todolist">
      <input type="checkbox" checked={item.status} /> <p>{item.title}</p>
    </div>
  );
};

export default ToDoList;
