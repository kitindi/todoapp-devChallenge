import React from "react";

const CompetedTodos = ({ item, handleDeleteOne, handleCheckBox }) => {
  const handleDelete = (id) => {
    let idTodelete = id;
    handleDeleteOne(idTodelete);
  };

  const handleCkeck = (id) => {
    handleCheckBox(id);
  };
  return (
    <div>
      <div className="todolist">
        <input
          type="checkbox"
          defaultChecked={item.isChecked}
          onChange={() => handleCkeck(item.id)}
        />
        <p style={{ textDecoration: item.isChecked ? "line-through" : "none" }}>
          {item.title}
        </p>
        <div className="btn" onClick={() => handleDelete(item.id)}>
          <ion-icon name="trash-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default CompetedTodos;
