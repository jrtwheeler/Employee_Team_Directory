import React from "react";
import "./style.css"

function NavBar(props) {
  return (
    <header className="jumbotron">
      <div className="Navbar-Text">
        {props.children}
      </div>
    </header>
  );
}

export default NavBar;
