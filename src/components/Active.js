import React from "react";
import Form from "./Form";
import ToDoList from "./ToDoList";

const Active = ({ dataItems, onAddData, handleCheckBox }) => {
  const activeItems = dataItems.filter((item) => item.isChecked === false);

  return (
    <div>
      <Form onAddData={onAddData} />
      {activeItems.map((item) => (
        <ToDoList item={item} key={item.id} handleCheckBox={handleCheckBox} />
      ))}
    </div>
  );
};

export default Active;
