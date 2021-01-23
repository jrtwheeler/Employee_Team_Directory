import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import DataBaseContainer from "./components/DataBaseContainer";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faNewspaper } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faNewspaper)

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
        <div>
        <Footer>Made in Baltimore.</Footer>
        </div>
      </Router>
    </Wrapper>
    
  );
}

export default App;
