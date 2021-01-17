import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import Directory from "./pages/Directory";

function App() {
  return (
    <Wrapper>
    <Router>
      <div>
        <NavBar />
      </div>
      <div>
        <Directory></Directory>
      </div>
    </Router>
    </Wrapper>
  );
}

export default App;
