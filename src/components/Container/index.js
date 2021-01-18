import React, { Component } from "react";
import Row from "../Row";
import Col from "../Col";
import Table from "../Table";
import Form from "../Form";
import API from "../../utils/API";

class Container extends Component {
  state = {
    results: []
  };


  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  componentDidMount() {
    API.getEmployeeDatabase()
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      // <Container>
        <Row>
          <Col size="md-4">
            <Form
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </Col>
          <Col size="md-12">
            <Table
              results={this.state.results}
            />
          </Col>
        </Row>
      // </Container>
    );
  }
}

export default Container;
