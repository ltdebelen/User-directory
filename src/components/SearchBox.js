import React from "react";

function SearchBox(props) {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">
          <i className="fa fa-user" aria-hidden="true"></i>
        </span>
      </div>
      <input
        onChange={props.handleInputChange}
        value={props.value}
        type="text"
        name="search"
        className="form-control"
        placeholder="Search for employee..."
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </div>
  );
}

export default SearchBox;
