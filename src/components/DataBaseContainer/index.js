import React, { Component } from "react";
import Row from "../Row";
import Col from "../Col";
import Table from "../Table";
import Form from "../Form";
import Container from "../Container";
import API from "../../utils/API";

class DataBaseContainer extends Component {
  state = {
    search: "",
    error: "",
    results: []
  };


  // When the component mounts, get a list of twenty five randomly generated employees update this.state.results
  componentDidMount() {
    API.getEmployeeDatabase()
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  }

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    alert("Working");
  };

  render() {
    return (
      <Container>
        <Row>
            <Form
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          <Col size="md-12">
            <Table
              results={this.state.results}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DataBaseContainer;
