import React from "react";
import "./style.css";

function Form(props) {
  return (
    <div>
      <div className="input-group input-group-sm">
        <input
          className="form-control"
          aria-describedby="basic-addon1"
          name="palette"
          onChange={props.handleInputChange}
          type="text"
          placeholder="Input URL to palette"
        />
      </div>
    </div>
  );
}

export default Form;
