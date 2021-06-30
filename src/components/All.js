import React from "react";
import Form from "./Form";
import ToDoList from "./ToDoList";

const All = ({ dataItems, onAddData, changeHandler, onCheckedBox }) => {
  return (
    <div>
      <Form onAddData={onAddData} />
      {dataItems.map((item) => (
        <ToDoList
          item={item}
          key={item.id}
          changeHandler={changeHandler}
          onCheckedBox={onCheckedBox}
        />
      ))}
    </div>
  );
};

export default All;
