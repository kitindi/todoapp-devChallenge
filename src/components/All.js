import React from "react";
import Form from "./Form";
import ToDoList from "./ToDoList";

const All = ({ dataItems, onAddData, changeHandler, handleCheckBox }) => {
  return (
    <div>
      <Form onAddData={onAddData} />
      {dataItems.map((item) => (
        <ToDoList
          item={item}
          key={item.id}
          changeHandler={changeHandler}
          handleCheckBox={handleCheckBox}
        />
      ))}
    </div>
  );
};

export default All;
