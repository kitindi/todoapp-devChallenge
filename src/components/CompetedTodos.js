import React from "react";

const CompetedTodos = ({ item }) => {
  return (
    <div>
      <div className="todolist">
        <input type="checkbox" checked={item.status} onChange="" />
        <p style={{ textDecoration: item.status && "line-through" }}>
          {item.title}
        </p>
        <div className="btn">
          <ion-icon name="trash-outline"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default CompetedTodos;
