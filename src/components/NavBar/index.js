import React from "react";
import "./style.css"

function NavBar() {
  return (
    <header className="header">
      <h2 className="Navbar-Text">Employee Directory</h2>
      <p className="Navbar-Text">Click on carrots to filter on heading or use the search directory to narrow your results</p>
    </header>
  );
}

export default NavBar;
