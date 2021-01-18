import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import Wrapper from "./components/Wrapper";
import Table from "./components/Table";
import Container from "./components/Container";

function App() {
  return (
    <Wrapper>
      <Router>
        <div>
          <NavBar>
            <h2>Employee Directory</h2>
            <p>Click on carrots to filter on heading or use the search directory to narrow your results</p>
          </NavBar>
        </div>
        <div>
          <Container></Container>
        </div>
      </Router>
    </Wrapper>
  );
}

export default App;
