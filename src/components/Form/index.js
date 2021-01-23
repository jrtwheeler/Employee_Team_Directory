import React from "react";
import Col from "../Col";
import "./style.css";


function Form(props) {
  return <Col size="md-4">
    <div className="form">
      <form>
        <input
          value={props.value}
          name="search"
          onChange={props.handleInputChange}
          type="text"
          placeholder="Search the database for an employee"
        />
      </form>
    </div>
  </Col>
}

export default Form;
