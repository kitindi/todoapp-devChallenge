import React from "react";
import Form from "./Form";
import ToDoList from "./ToDoList";

const Active = ({ dataItems, onAddData, onCheckedBox }) => {
  const activeItems = dataItems.filter((item) => item.status === false);

  return (
    <div>
      <Form onAddData={onAddData} />
      {activeItems.map((item) => (
        <ToDoList item={item} key={item.id} onCheckedBox={onCheckedBox} />
      ))}
    </div>
  );
};

export default Active;
