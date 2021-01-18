import React from "react";
import "./style.css";

function Table(props) {
    return (
        <div>
          {props.results.map(result => (
            <tr>
            <td>{result.name.title} {result.name.first} {result.name.last}</td>
            <td>{result.email}</td>
            <td>{result.phone}</td>
            <td>{result.email}</td>
            <td>{result.phone}</td>
            <td>{result.dob.date}</td>
         </tr>
          ))}
        </div>
      );
}

export default Table;