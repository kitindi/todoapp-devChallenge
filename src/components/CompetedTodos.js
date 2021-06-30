import React from "react";

const CompetedTodos = ({ item }) => {
  return (
    <div>
      <div className="todolist">
        <input type="checkbox" checked={item.status} /> <p>{item.title}</p>
        <button>
          <ion-icon name="trash-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
};

export default CompetedTodos;
