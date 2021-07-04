import React from "react";

const ToDoList = ({ item, handleCheckBox }) => {
  const handleCheck = (id) => {
    handleCheckBox(id);
  };
  return (
    <div className="todolist">
      <input
        type="checkbox"
        defaultChecked={item.isChecked}
        onChange={() => handleCheck(item.id)}
      />
      <p style={{ textDecoration: item.isChecked ? "line-through" : "none" }}>
        {item.title}
      </p>
    </div>
  );
};

export default ToDoList;
