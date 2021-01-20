import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import DataBaseContainer from "./components/DataBaseContainer";

function App() {
  return (
    <Wrapper>
      <Router>
        <div>
          <Header>
            <h2>Employee Directory</h2>
            <p>Click on carrots to filter on heading or use the search directory to narrow your results</p>
          </Header>
        </div>
        <div>
          <DataBaseContainer/>
        </div>
      </Router>
    </Wrapper>
  );
}

export default App;
