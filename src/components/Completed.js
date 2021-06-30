import React from "react";
import CompletedTodos from "./CompetedTodos";

const Completed = ({ dataItems, handleDeleteOne }) => {
  const completedItems = dataItems.filter((item) => item.status === true);

  return (
    <div className="completed-section">
      {completedItems.map((item) => (
        <CompletedTodos
          item={item}
          key={item.id}
          handleDeleteOne={handleDeleteOne}
        />
      ))}
      <div className="btn-tab">
        <button className="btn-delete">
          <ion-icon name="trash-outline"></ion-icon> Delete All
        </button>
      </div>
    </div>
  );
};

export default Completed;
