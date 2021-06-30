import React from "react";
import Form from "./Form";
import ToDoList from "./ToDoList";

const All = ({ dataItems, onAddData }) => {
  return (
    <div>
      <Form onAddData={onAddData} />
      {dataItems.map((item) => (
        <ToDoList item={item} key={item.id} />
      ))}
    </div>
  );
};

export default All;
