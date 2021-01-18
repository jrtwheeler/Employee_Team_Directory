import React from "react";
import "./style.css";

function Table(props) {
  return (
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Date of Birth</th>
        </tr>
      </thead>
      {props.results.map(result => (
        <tbody>
          <tr>
            <td>{result.name.title} {result.name.first} {result.name.last}</td>
            <td>{result.email}</td>
            <td>{result.phone}</td>
            <td>{result.dob.date}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}

export default Table;