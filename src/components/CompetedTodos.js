import React from "react";

const CompetedTodos = ({ item, handleDeleteOne }) => {
  const handleDelete = (id) => {
    let idTodelete = id;
    handleDeleteOne(idTodelete);
  };
  return (
    <div>
      <div className="todolist">
        <input type="checkbox" checked={item.status} onChange="" />
        <p style={{ textDecoration: item.status && "line-through" }}>
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
