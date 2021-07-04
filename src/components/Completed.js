import React from "react";
import CompletedTodos from "./CompetedTodos";

const Completed = ({
  dataItems,
  handleDeleteOne,
  handleDeleteAll,
  handleCheckBox,
}) => {
  const completedItems = dataItems.filter((item) => item.isChecked === true);

  return (
    <div className="completed-section">
      {completedItems.map((item) => (
        <CompletedTodos
          item={item}
          key={item.id}
          handleDeleteOne={handleDeleteOne}
          handleDeleteAll={handleDeleteAll}
          handleCheckBox={handleCheckBox}
        />
      ))}
      <div className="btn-tab">
        <button className="btn-delete" onClick={() => handleDeleteAll()}>
          <ion-icon name="trash-outline"></ion-icon> Delete All
        </button>
      </div>
    </div>
  );
};

export default Completed;
