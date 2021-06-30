import React from "react";

const ToDoList = ({ item }) => {
  const handleChange = (id) => {
    alert(id);
  };
  return (
    <div className="todolist">
      <input
        type="checkbox"
        checked={item.status}
        onChange={() => handleChange(item.id)}
      />
      <p style={{ textDecoration: item.status && "line-through" }}>
        {item.title}
      </p>
    </div>
  );
};

export default ToDoList;
