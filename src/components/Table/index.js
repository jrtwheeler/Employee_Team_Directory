import React from "react";
import "./style.css";

function Table(props) {
    return (
        <ul className="list-group">
          {props.state.result.map(item => (
            <tr key={id}>
            <td>{props.src}</td>
            <td>{props.firstname}</td>
            <td>{props.lastname}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
            <td>{props.dob}</td>
         </tr>
          ))}
        </ul>
      );
}

export default Table;