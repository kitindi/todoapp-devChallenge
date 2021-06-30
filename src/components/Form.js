import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState("");
  const inputHandler = (event) => {
    setData(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    alert(data);
    setData("");
  };
  return (
    <div className="form-data">
      <form action="">
        <div className="form-controls">
          <input
            type="text"
            value={data}
            onChange={inputHandler}
            placeholder="add details"
          />
          <button className="btn-add" type="submit" onClick={submitHandler}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
