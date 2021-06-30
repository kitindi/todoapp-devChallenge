import React from "react";

const ToDoList = ({ item }) => {
  return (
    <div className="todolist">
      <input type="checkbox" checked={item.status} />{" "}
      <p style={{ textDecoration: item.status && "line-through" }}>
        {item.title}
      </p>
    </div>
  );
};

export default ToDoList;
