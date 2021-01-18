import React from "react";
import "./style.css";

function Table(props) {
    return (
        <ul className="list-group">
          {props.groceries.map(item => (
            <li className="list-group-item" key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
      );
}

export default Table;