import React from "react";
import CompletedTodos from "./CompetedTodos";

const Completed = ({ dataItems }) => {
  const completedItems = dataItems.filter((item) => item.status === true);
  return (
    <div className="completed-section">
      {completedItems.map((item) => (
        <CompletedTodos item={item} key={item.id} />
      ))}
      <div>
        <button className="btn-delete">Delete All</button>
      </div>
    </div>
  );
};

export default Completed;
